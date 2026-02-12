"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { useState, useRef } from "react"

interface GlowingCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlowingCard({ children, className = "" }: GlowingCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  return (
    <Card
      ref={cardRef}
      className={`glass-effect border-border/50 transition-all duration-300 hover:border-primary/50 relative overflow-hidden group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        background: isHovered
          ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
          : undefined,
      }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>
      {isHovered && (
        <div
          className="absolute w-32 h-32 bg-primary/20 rounded-full blur-xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </Card>
  )
}
