import { Card } from "@/components/ui/card";

interface FacilityCardProps {
  title: string;
  description: string;
  image: string;
}

const FacilityCard = ({ title, description, image }: FacilityCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-elevated transition-smooth border-border group cursor-pointer">
      <div className="h-56 overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-smooth">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default FacilityCard;
