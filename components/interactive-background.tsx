"use client"

import { useEffect, useRef, useState } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

interface MousePosition {
  x: number
  y: number
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const nodesRef = useRef<Node[]>([])
  const animationRef = useRef<number>()

  // Initialize nodes
  useEffect(() => {
    const initNodes = () => {
      const newNodes: Node[] = []
      const colors = ["#8b5cf6", "#3b82f6", "#06b6d4", "#10b981", "#f59e0b", "#ec4899"]

      // Create a grid-like distribution for better network effect
      const cols = Math.floor(window.innerWidth / 150)
      const rows = Math.floor(window.innerHeight / 150)

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          // Add some randomness to the grid positions
          const x = (i * window.innerWidth) / cols + (Math.random() - 0.5) * 100
          const y = (j * window.innerHeight) / rows + (Math.random() - 0.5) * 100

          newNodes.push({
            x: Math.max(50, Math.min(window.innerWidth - 50, x)),
            y: Math.max(50, Math.min(window.innerHeight - 50, y)),
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 2 + 2,
            opacity: Math.random() * 0.6 + 0.2,
            color: colors[Math.floor(Math.random() * colors.length)],
          })
        }
      }

      // Add some random nodes for more organic feel
      for (let i = 0; i < 20; i++) {
        newNodes.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.4 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }

      nodesRef.current = newNodes
    }

    initNodes()
    window.addEventListener("resize", initNodes)
    return () => window.removeEventListener("resize", initNodes)
  }, [])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw dynamic gradient background based on mouse position
      const gradient = ctx.createRadialGradient(
        mousePosition.x,
        mousePosition.y,
        0,
        mousePosition.x,
        mousePosition.y,
        400,
      )
      gradient.addColorStop(0, "rgba(139, 92, 246, 0.08)")
      gradient.addColorStop(0.3, "rgba(59, 130, 246, 0.04)")
      gradient.addColorStop(0.6, "rgba(6, 182, 212, 0.02)")
      gradient.addColorStop(1, "transparent")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodesRef.current.forEach((node, index) => {
        // Mouse interaction - attraction and repulsion
        const dx = mousePosition.x - node.x
        const dy = mousePosition.y - node.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 200) {
          const force = (200 - distance) / 200
          // Attraction when far, repulsion when very close
          if (distance > 50) {
            node.vx += (dx / distance) * force * 0.008
            node.vy += (dy / distance) * force * 0.008
          } else {
            node.vx -= (dx / distance) * force * 0.02
            node.vy -= (dy / distance) * force * 0.02
          }
        }

        // Update position
        node.x += node.vx
        node.y += node.vy

        // Boundary check with elastic collision
        if (node.x < 0 || node.x > canvas.width) {
          node.vx *= -0.8
          node.x = Math.max(0, Math.min(canvas.width, node.x))
        }
        if (node.y < 0 || node.y > canvas.height) {
          node.vy *= -0.8
          node.y = Math.max(0, Math.min(canvas.height, node.y))
        }

        // Friction
        node.vx *= 0.995
        node.vy *= 0.995

        // Draw connections first (behind nodes)
        nodesRef.current.forEach((otherNode, otherIndex) => {
          if (index !== otherIndex) {
            const dx = node.x - otherNode.x
            const dy = node.y - otherNode.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            // Draw connections based on distance
            if (distance < 150) {
              const opacity = ((150 - distance) / 150) * 0.3

              // Create gradient for the connection line
              const lineGradient = ctx.createLinearGradient(node.x, node.y, otherNode.x, otherNode.y)
              lineGradient.addColorStop(0, node.color)
              lineGradient.addColorStop(1, otherNode.color)

              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(otherNode.x, otherNode.y)
              ctx.strokeStyle = lineGradient
              ctx.globalAlpha = opacity
              ctx.lineWidth = 1
              ctx.stroke()

              // Add pulsing effect for close connections
              if (distance < 80) {
                ctx.globalAlpha = opacity * 0.5
                ctx.lineWidth = 2
                ctx.stroke()
              }
            }
          }
        })

        // Draw node with glow effect
        ctx.globalAlpha = node.opacity

        // Outer glow
        const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 3)
        glowGradient.addColorStop(0, node.color)
        glowGradient.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = glowGradient
        ctx.globalAlpha = node.opacity * 0.3
        ctx.fill()

        // Main node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.globalAlpha = node.opacity
        ctx.fill()

        // Inner highlight
        ctx.beginPath()
        ctx.arc(node.x - node.size * 0.3, node.y - node.size * 0.3, node.size * 0.4, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)"
        ctx.globalAlpha = node.opacity * 0.8
        ctx.fill()
      })

      // Draw mouse interaction area
      if (mousePosition.x > 0 && mousePosition.y > 0) {
        const mouseGradient = ctx.createRadialGradient(
          mousePosition.x,
          mousePosition.y,
          0,
          mousePosition.x,
          mousePosition.y,
          100,
        )
        mouseGradient.addColorStop(0, "rgba(139, 92, 246, 0.1)")
        mouseGradient.addColorStop(0.5, "rgba(59, 130, 246, 0.05)")
        mouseGradient.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.arc(mousePosition.x, mousePosition.y, 100, 0, Math.PI * 2)
        ctx.fillStyle = mouseGradient
        ctx.globalAlpha = 0.8
        ctx.fill()

        // Mouse cursor effect
        ctx.beginPath()
        ctx.arc(mousePosition.x, mousePosition.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = "#8b5cf6"
        ctx.globalAlpha = 0.8
        ctx.fill()
      }

      ctx.globalAlpha = 1

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" style={{ background: "transparent" }} />
  )
}
