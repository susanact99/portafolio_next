import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen, Clock } from "lucide-react"

interface EducationCardProps {
  degree: string
  institution: string
  period: string
  description: string
  type: "university" | "certification" | "course"
  status: "completed" | "in-progress"
}

export default function EducationCard({ degree, institution, period, description, type, status }: EducationCardProps) {
  const getIcon = () => {
    switch (type) {
      case "university":
        return <GraduationCap className="h-6 w-6" />
      case "certification":
        return <Award className="h-6 w-6" />
      case "course":
        return <BookOpen className="h-6 w-6" />
      default:
        return <BookOpen className="h-6 w-6" />
    }
  }

  const getTypeLabel = () => {
    switch (type) {
      case "university":
        return "Universidad"
      case "certification":
        return "Certificación"
      case "course":
        return "Curso"
      default:
        return "Formación"
    }
  }

  return (
    <Card className="glass-effect border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Icon and Type */}
          <div className="flex flex-col items-center md:items-start gap-3 md:w-32 flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white simple-glow">
              {getIcon()}
            </div>
            <Badge variant="outline" className="glass-effect text-xs border-primary/30 text-primary">
              {getTypeLabel()}
            </Badge>
            {status === "in-progress" && (
              <Badge
                variant="secondary"
                className="glass-effect text-xs flex items-center gap-1 bg-primary/10 text-primary border-primary/20"
              >
                <Clock className="h-3 w-3" />
                En curso
              </Badge>
            )}
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{degree}</h3>
              <span className="text-sm text-muted-foreground font-medium">{period}</span>
            </div>

            <h4 className="text-lg font-medium text-primary mb-3">{institution}</h4>

            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Progress bar for in-progress courses */}
        {status === "in-progress" && (
          <div className="mt-4 pt-4 border-t border-border/50">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Progreso del curso</span>
              <span className="text-sm font-medium text-primary">50%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full w-1/2 transition-all duration-300 simple-glow"></div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
