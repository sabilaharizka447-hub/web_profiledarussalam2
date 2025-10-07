import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ProgramCard = ({ icon: Icon, title, description, features }: ProgramCardProps) => {
  return (
    <Card className="p-6 hover:shadow-elevated transition-smooth border-border h-full">
      <div className="flex flex-col h-full">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="text-primary" size={28} />
        </div>
        <h3 className="font-bold text-xl text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default ProgramCard;
