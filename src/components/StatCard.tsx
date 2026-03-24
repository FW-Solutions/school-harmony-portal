import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  variant?: "default" | "primary" | "secondary" | "accent";
}

const variantStyles = {
  default: "bg-card border-border",
  primary: "bg-primary/5 border-primary/20",
  secondary: "bg-secondary/10 border-secondary/20",
  accent: "bg-accent/10 border-accent/30",
};

const iconStyles = {
  default: "bg-muted text-muted-foreground",
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/20 text-accent-foreground",
};

export default function StatCard({ title, value, icon: Icon, trend, variant = "default" }: StatCardProps) {
  return (
    <div className={`rounded-xl border p-5 ${variantStyles[variant]}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
          {trend && <p className="text-xs text-success mt-1">{trend}</p>}
        </div>
        <div className={`p-2.5 rounded-lg ${iconStyles[variant]}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
