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
import Perfil from "/public/Avatar.jpg"

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
                Ingeniera Industrial especializada en desarrollo web y optimización de procesos digitales con
                tecnologías modernas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="group professional-button">
                  <Link href="#contact" className="flex items-center gap-2">
                    Contáctame
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="professional-outline bg-transparent">
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
                <Link href="mailto:sctrabaj@gmail.com">
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
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl opacity-30 animate-glow"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 glass-effect">
                  <Image
                    src={Perfil}
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
                Soy una Ingeniera Industrial con una pasión por la tecnología y el desarrollo web. Mi formación en
                ingeniería me ha dado una perspectiva única para optimizar procesos y crear soluciones eficientes.
                Actualmente me especializo en desarrollo frontend con Next.js y tecnologías modernas, combinando mi
                experiencia en análisis de procesos con habilidades de programación.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlowingCard>
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 simple-glow">
                      <span className="text-white text-2xl font-bold">3+</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Años en Tecnología</h3>
                    <p className="text-muted-foreground text-sm">Especializándome en desarrollo web</p>
                  </CardContent>
                </GlowingCard>
                <GlowingCard>
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 simple-glow">
                      <span className="text-white text-2xl font-bold">5+</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Años de Experiencia</h3>
                    <p className="text-muted-foreground text-sm">En ingeniería y optimización</p>
                  </CardContent>
                </GlowingCard>
                <GlowingCard>
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 simple-glow">
                      <span className="text-white text-2xl font-bold">5</span>
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
          <section className="container px-4 md:px-6 py-12 md:py-24 section-bg" id="education">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gradient">Mi Formación</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Mi trayectoria académica y profesional que combina ingeniería industrial con especialización en
                tecnologías de desarrollo web.
              </p>

              <div className="space-y-8">
                <EducationCard
                  degree="Ingeniería Industrial"
                  institution="Universidad"
                  period="2017 - 2022"
                  description="Formación integral en optimización de procesos, gestión de operaciones, análisis de sistemas y mejora continua. Desarrollo de habilidades analíticas y de resolución de problemas que aplico en el desarrollo de software."
                  type="university"
                  status="completed"
                />

                <EducationCard
                  degree="Posicionamiento SEO/SEM"
                  institution="Centro de Formación Digital"
                  period="2023"
                  description="Especialización en optimización para motores de búsqueda (SEO) y marketing en buscadores (SEM). Estrategias de posicionamiento web, análisis de keywords y campañas publicitarias digitales."
                  type="course"
                  status="completed"
                />

                <EducationCard
                  degree="Introducción a la Programación"
                  institution="Escuela de Organización Industrial (EOI)"
                  period="2024"
                  description="Curso completo de fundamentos de programación, lógica algorítmica, estructuras de datos y metodologías de desarrollo. Base sólida para el desarrollo de software moderno."
                  type="course"
                  status="completed"
                />

                <EducationCard
                  degree="C# Foundational Certification"
                  institution="Microsoft"
                  period="2025"
                  description="Certificación oficial de Microsoft en fundamentos de C#, cubriendo sintaxis básica, programación orientada a objetos, manejo de datos y desarrollo de aplicaciones con .NET Framework."
                  type="certification"
                  status="completed"
                />

                <EducationCard
                  degree="Node.js Desarrollo Web con MVC y REST APIs"
                  institution="Udemy"
                  period="2025"
                  description="Curso completo de desarrollo backend con Node.js, implementando el patrón Model-View-Controller (MVC) y creación de REST APIs. Desarrollo de aplicaciones web escalables, manejo de bases de datos y arquitectura de servicios."
                  type="course"
                  status="completed"
                />

                <EducationCard
                  degree="FP Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)"
                  institution="CIFP Rodolfo Ucha"
                  period="2025 - En curso"
                  description="Formación profesional de grado superior en desarrollo de aplicaciones para múltiples plataformas. Programación, bases de datos, desarrollo de interfaces, acceso a datos, programación multimedia y dispositivos móviles."
                  type="university"
                  status="in-progress"
                  progress={40}
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
              Una selección de mis trabajos más recientes, donde combino mi formación en ingeniería con habilidades de
              desarrollo web para crear soluciones eficientes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Tienda Online"
                description="Proyecto e-commerce con carrito de compra"
                image="/tienda.jpg"
                tags={["React", "Javascript", "MVC"]}
                link="https://proyecto1.ejemplo.com"
              />
              <ProjectCard
                title="Proyecto de bines raíces"
                description="pagina de inmobiliaria"
                image="bienesR.JPG"
                tags={["React", "Node.js", "MongoDB", "SEO APIs"]}
                link="https://proyecto2.ejemplo.com"
              />
              <ProjectCard
                title="Tic tac toe"
                description="Juego clasico de tic tac toe"
                image="/ttt.jpg"
                tags={["HTML", "JavaScript", "CSS"]}
                link="https://proyecto3.ejemplo.com"
              />
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="professional-outline group bg-transparent">
                <Link
                  href="https://github.com/susanact99"
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
              Combinación única de habilidades técnicas en desarrollo web y conocimientos en ingeniería industrial para
              crear soluciones integrales.
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full"></div>
                  Desarrollo Web
                </h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="Next.js" />
                  <SkillBadge name="React" />
                  <SkillBadge name="TypeScript" />
                  <SkillBadge name="JavaScript" />
                  <SkillBadge name="Java" />
                  <SkillBadge name="HTML5" />
                  <SkillBadge name="CSS3" />
                  <SkillBadge name="Tailwind CSS" />
                  <SkillBadge name="Bootstrap" />
                  <SkillBadge name="C#" />
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full"></div>
                  Backend & Bases de Datos
                </h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="Node.js" />
                  <SkillBadge name="MySQL" />
                  <SkillBadge name="MongoDB" />
                  <SkillBadge name="REST APIs" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full"></div>
                  Ingeniería & Herramientas
                </h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="Análisis de Procesos" />
                  <SkillBadge name="Optimización" />
                  <SkillBadge name="Git" />
                  <SkillBadge name="Visual Studio" />
                  <SkillBadge name="Eclipse" />
                  <SkillBadge name="Excel Avanzado" />
                  <SkillBadge name="Microsoft Office" />
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
                ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a optimizar procesos o
                desarrollar soluciones web eficientes.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
                  <div className="space-y-6">
                    <GlowingCard>
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center icon-glow">
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
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center icon-glow">
                          <Linkedin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium">LinkedIn</h4>
                          <Link
                            href="https://cu.linkedin.com/in/susana-calzadilla-70301a265/"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            linkedin.com/in/susana
                          </Link>
                        </div>
                      </CardContent>
                    </GlowingCard>
                    <GlowingCard>
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center icon-glow">
                          <Github className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium">GitHub</h4>
                          <Link
                            href="https://github.com/susanact99/"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            github.com/susanact99
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
              <Button variant="outline" size="sm" className="professional-outline bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Descargar CV
              </Button>
            </div>
            <div className="flex gap-4">
              <Link href="https://github.com/susanact99" target="_blank" rel="noopener noreferrer">
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
              <Link href="mailto:sctrabaj@gmail.com">
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
