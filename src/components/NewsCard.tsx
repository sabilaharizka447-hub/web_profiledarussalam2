import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
}

const NewsCard = ({ title, excerpt, date, category, image }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-elevated transition-smooth border-border group cursor-pointer">
      {image && (
        <div className="h-48 overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-full">
            {category}
          </span>
          <div className="flex items-center gap-1 text-muted-foreground text-xs">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
        </div>
        <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-smooth">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {excerpt}
        </p>
      </div>
    </Card>
  );
};

export default NewsCard;
