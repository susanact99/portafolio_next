"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Send } from "lucide-react"
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_eqoq632';
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_4uxl0y5';
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '-GzGEHQC_Ao5I8ijX';

    if (!formRef.current) return

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        // Notificación de éxito con SweetAlert2 (tu lógica original)
        Swal.fire({
          title: '¡Message delivered!',
          text: 'Your message has been delivered successfully',
          icon: 'success',
          confirmButtonText: 'Accept',
          timer: 3000,
          showConfirmButton: true,
          background: 'rgb(5, 0, 8)',
          color: '#fff',
          toast: true,
          position: 'top-end'
        })

        // Notificación extra con el sistema de Toast de Shadcn
        toast({
          title: "¡Mensaje enviado! ",
          description: "Gracias por contactarme. Te responderé pronto.",
        })

        setIsSubmitting(false)
        formRef.current?.reset() // Limpiar formulario
      }, (error) => {
        console.error(error.text)
        setIsSubmitting(false)
        
        toast({
          variant: "destructive",
          title: "Error al enviar",
          description: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
        })
      })
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input 
            name="from_name" 
            placeholder="Nombre" 
            required 
            className="glass-effect border-border/50 focus:border-primary" 
          />
        </div>
        <div>
          <Input
            name="reply_to" 
            type="email"
            placeholder="Email"
            required
            className="glass-effect border-border/50 focus:border-primary"
          />
        </div>
      </div>
      <div>
        <Input 
          name="subject" 
          placeholder="Asunto" 
          required 
          className="glass-effect border-border/50 focus:border-primary" 
        />
      </div>
      <div>
        <Textarea
          name="message" 
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