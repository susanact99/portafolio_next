import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from "lucide-react"
import Header from "@/components/header"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ContactForm from "@/components/contact-form"
import AnimatedSection from "@/components/animated-section"
import GlowingCard from "@/components/glowing-card"
import EducationCard from "@/components/education-card"
import InteractiveBackground from "@/components/interactive-background"


export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Interactive Network Background */}
      <InteractiveBackground />

      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <AnimatedSection>
          <section className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex flex-col gap-4 md:gap-6 md:w-1/2 animate-slide-in">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">Disponible para proyectos</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                Hola, soy <span className="text-gradient">Susana</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Desarrolladora Full Stack especializada en crear experiencias digitales excepcionales con tecnologías
                modernas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="group neon-glow">
                  <Link href="#contact" className="flex items-center gap-2">
                    Contáctame
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="glass-effect">
                  <Link href="#projects" className="flex items-center gap-2">
                    Ver Proyectos
                  </Link>
                </Button>
              </div>
              <div className="flex gap-4 mt-6">
                <Link href="https://github.com/susanact99/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://cu.linkedin.com/in/susana-calzadilla-70301a265/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="mailto:contacto@ejemplo.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-glow"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/50 glass-effect">
                  <Image
                    src="/Avatar.jpg"
                    alt="Foto de perfil de Susana"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection>
          <section className="container px-4 md:px-6 py-12 md:py-24" id="about">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Sobre Mí</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
                Soy una desarrolladora apasionada con más de 5 años de experiencia creando soluciones web y móviles. Me
                especializo en React, Next.js y Node.js, con un enfoque en crear interfaces de usuario intuitivas y
                experiencias de usuario excepcionales que marquen la diferencia.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlowingCard>
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-4 neon-glow">
                      <span className="text-white text-2xl font-bold">3+</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Años de Experiencia</h3>
                    <p className="text-muted-foreground text-sm">Desarrollando soluciones innovadoras</p>
                  </CardContent>
                </GlowingCard>
                <GlowingCard>
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 neon-glow">
                      <span className="text-white text-2xl font-bold">10+</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Proyectos Completados</h3>
                    <p className="text-muted-foreground text-sm">Desde startups hasta empresas</p>
                  </CardContent>
                </GlowingCard>
                <GlowingCard>
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 neon-glow">
                      <span className="text-white text-2xl font-bold">4+</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Certificaciones</h3>
                    <p className="text-muted-foreground text-sm">En tecnología y desarrollo</p>
                  </CardContent>
                </GlowingCard>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection>
          <section className="container px-4 md:px-6 py-12 md:py-24 bg-muted/20" id="education">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gradient">Mi Formación</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Mi trayectoria académica y profesional que me ha permitido desarrollar las habilidades necesarias para
                crear soluciones tecnológicas innovadoras.
              </p>

              <div className="space-y-8">
                <EducationCard
                  degree="Ingeniería Industrial"
                  institution="Universidad de Holguín"
                  period="2017 - 2022"
                  description="Formación integral en optimización de procesos, gestión de operaciones, análisis de sistemas y mejora continua. Desarrollo de habilidades analíticas y de resolución de problemas que aplico en el desarrollo de software."
                  type="university"
                  status="completed"
                />

                <EducationCard
                  degree="Posicionamiento SEO/SEM"
                  institution="Femxa"
                  period="2024"
                  description="Posicionamiento de forma orgánica mediante optimización de contenidos con palabras clave relevantes, mejorar la estructura de la web, o construir enlaces de calidad "
                  type="certification"
                  status="completed"
                />

                <EducationCard
                  degree="Introducción a la programación"
                  institution="Escuela de Organización Industrial"
                  period="2023"
                  description="Utilización de lenguajes como Javascript y Java en el desarrollo web"
                  type="course"
                  status="completed"
                />

                <EducationCard
                  degree="Foundational C# with Microsoft"
                  institution="Microsoft"
                  period="2024"
                  description="Introducción completa a la programación en C#, cubriendo sus conceptos básicos, sintaxis y aplicación práctica en el desarrollo de software."
                  type="course"
                  status="completed"
                />

                <EducationCard
                  degree="FP Superior en Desarrollo de Aplicaciones Multiplataforma"
                  institution="CIFP Rodolfo Ucha Piñeiro"
                  period="2025 - En curso"
                  description="Desarrollo de aplicaciones informáticas multiplataforma en diversos ámbitos: gestión empresarial y corporativa, relación con clientes, educación, ocio, dispositivos móviles y entretenimiento; aplicaciones desarrolladas e implementadas en entornos de intranet, extranet e Internet; e implantación y adaptación de sistemas de planificación de recursos empresariales y de gestión de la relación con los clientes."
                  type="university"
                  status="in-progress"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection>
          <section className="container px-4 md:px-6 py-12 md:py-24" id="projects">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gradient">Mis Proyectos</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Una selección de mis trabajos más recientes, donde combino creatividad y tecnología para crear
              experiencias únicas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="E-commerce App"
                description="Plataforma de comercio electrónico con carrito de compras, pagos integrados y panel de administración completo."
                image="/tienda.jpg"
                tags={["React", "Javascript"]}
                link="https://susanact99.github.io/e-commerce/"
              />
              <ProjectCard
                title="Pagina de Bienes Raíces"
                description="Aplicación web para la gestión de propiedades inmobiliarias."
                image="/bienesR.jpg"
                tags={["Node.js", "Express", "MySQL", "Tailwindcss"]}
                link="https://github.com/susanact99/bienes-raices"
              />
              <ProjectCard
                title="Tic-tac-toe"
                description="Juego típico de tres en linea"
                image="/ttt.jpg"
                tags={["React Native", "GraphQL", "AWS", "TensorFlow"]}
                link="https://susanact99.github.io/Tic-tac-toe/"
              />
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="glass-effect group">
                <Link
                  href="https://github.com/susanact99/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Ver más en GitHub
                  <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
            </div>
          </section>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection>
          <section className="container px-4 md:px-6 py-12 md:py-24" id="skills">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gradient">Mis Habilidades</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones completas y escalables.
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="HTML5" />
                  <SkillBadge name="CSS3" />
                  <SkillBadge name="JavaScript" />
                  <SkillBadge name="TypeScript" />
                  <SkillBadge name="React" />
                  <SkillBadge name="Tailwind CSS" />

                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                  Backend
                </h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="Node.js" />
                  <SkillBadge name="Express" />
                  <SkillBadge name="MongoDB" />
                  <SkillBadge name="MySQL" />
                  <SkillBadge name="REST API" />
                  <SkillBadge name="Java" />
                  <SkillBadge name="Python" />

                </div>
              </div>

            </div>
          </section>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection>
          <section className="container px-4 md:px-6 py-12 md:py-24" id="contact">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gradient">Contáctame</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
                  <div className="space-y-6">
                    <GlowingCard>
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <p className="text-muted-foreground">sctrabaj@gmail.com</p>
                        </div>
                      </CardContent>
                    </GlowingCard>
                    <GlowingCard>
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                          <Linkedin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium">LinkedIn</h4>
                          <Link
                            href="https://cu.linkedin.com/in/susana-calzadilla-70301a265/"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            linkedin.com/in/susana-calzadilla-70301a265/
                          </Link>
                        </div>
                      </CardContent>
                    </GlowingCard>
                    <GlowingCard>
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                          <Github className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium">GitHub</h4>
                          <Link
                            href="https://github.com/susanact99/"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            github.com/susanact99/
                          </Link>
                        </div>
                      </CardContent>
                    </GlowingCard>
                  </div>
                </div>
                <GlowingCard>
                  <CardContent className="p-8">
                    <ContactForm />
                  </CardContent>
                </GlowingCard>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Footer */}
        <footer className="border-t border-border/50 py-8 md:py-12 mt-24">
          <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-muted-foreground">
                © {new Date().getFullYear()} SusanaDev. Todos los derechos reservados.
              </p>
              <Button variant="outline" size="sm" className="glass-effect">
                <a href="/CV%20Developer%20Susana%20Calzadilla.pdf" target="_blank" rel="noopener noreferrer">
                  Ver CV
                </a>
              </Button>
            </div>
            <div className="flex gap-4">
              <Link href="https://github.com/susanact99/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://cu.linkedin.com/in/susana-calzadilla-70301a265/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="mailto:susana@ejemplo.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
