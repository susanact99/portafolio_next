"use client"

import { useEffect, useRef, useState } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
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
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2,
            size: Math.random() * 1.5 + 1,
            opacity: Math.random() * 0.3 + 0.1,
          })
        }
      }

      // Add some random nodes for more organic feel
      for (let i = 0; i < 15; i++) {
        newNodes.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.2 + 0.1,
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

      // Draw simple gradient background based on mouse position
      const gradient = ctx.createRadialGradient(
        mousePosition.x,
        mousePosition.y,
        0,
        mousePosition.x,
        mousePosition.y,
        300,
      )
      gradient.addColorStop(0, "rgba(147, 51, 234, 0.06)")
      gradient.addColorStop(0.5, "rgba(147, 51, 234, 0.03)")
      gradient.addColorStop(1, "transparent")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodesRef.current.forEach((node, index) => {
        // Mouse interaction - subtle attraction
        const dx = mousePosition.x - node.x
        const dy = mousePosition.y - node.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 120) {
          const force = (120 - distance) / 120
          if (distance > 30) {
            node.vx += (dx / distance) * force * 0.004
            node.vy += (dy / distance) * force * 0.004
          } else {
            node.vx -= (dx / distance) * force * 0.008
            node.vy -= (dx / distance) * force * 0.008
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
        node.vx *= 0.998
        node.vy *= 0.998

        // Draw connections first (behind nodes)
        nodesRef.current.forEach((otherNode, otherIndex) => {
          if (index !== otherIndex) {
            const dx = node.x - otherNode.x
            const dy = node.y - otherNode.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            // Draw connections based on distance
            if (distance < 100) {
              const opacity = ((100 - distance) / 100) * 0.1

              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(otherNode.x, otherNode.y)
              ctx.strokeStyle = "#9333ea"
              ctx.globalAlpha = opacity
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        })

        // Draw node
        ctx.globalAlpha = node.opacity

        // Simple outer glow
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = "#9333ea"
        ctx.globalAlpha = node.opacity * 0.2
        ctx.fill()

        // Main node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fillStyle = "#9333ea"
        ctx.globalAlpha = node.opacity * 0.8
        ctx.fill()
      })

      // Draw simple mouse interaction area
      if (mousePosition.x > 0 && mousePosition.y > 0) {
        ctx.beginPath()
        ctx.arc(mousePosition.x, mousePosition.y, 60, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(147, 51, 234, 0.08)"
        ctx.globalAlpha = 0.6
        ctx.fill()

        // Mouse cursor effect
        ctx.beginPath()
        ctx.arc(mousePosition.x, mousePosition.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = "#9333ea"
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
