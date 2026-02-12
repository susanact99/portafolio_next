import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <Badge
      variant="outline"
      className="py-2 px-4 text-sm glass-effect border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-default text-foreground hover:text-primary"
    >
      {name}
    </Badge>
  )
}
