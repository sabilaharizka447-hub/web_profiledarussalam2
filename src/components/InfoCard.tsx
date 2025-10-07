import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description?: string;
}

const InfoCard = ({ icon: Icon, title, value, description }: InfoCardProps) => {
  return (
    <Card className="p-6 hover:shadow-elevated transition-smooth border-border bg-card">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
          <Icon className="text-accent" size={24} />
        </div>
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-foreground mb-1">{value}</h3>
          {description && <p className="text-xs text-muted-foreground">{description}</p>}
        </div>
      </div>
    </Card>
  );
};

export default InfoCard;
