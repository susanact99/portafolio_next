"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Send } from "lucide-react"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado! ✨",
        description: "Gracias por contactarme. Te responderé pronto.",
      })
      setIsSubmitting(false)
      // Reset form
      e.currentTarget.reset()
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input placeholder="Nombre" required className="glass-effect border-border/50 focus:border-primary" />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email"
            required
            className="glass-effect border-border/50 focus:border-primary"
          />
        </div>
      </div>
      <div>
        <Input placeholder="Asunto" required className="glass-effect border-border/50 focus:border-primary" />
      </div>
      <div>
        <Textarea
          placeholder="Cuéntame sobre tu proyecto..."
          rows={5}
          required
          className="glass-effect border-border/50 focus:border-primary resize-none"
        />
      </div>
      <Button type="submit" className="w-full neon-glow group" disabled={isSubmitting} size="lg">
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <>
            Enviar Mensaje
            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
    </form>
  )
}
