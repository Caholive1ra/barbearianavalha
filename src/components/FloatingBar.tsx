import { Star, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border py-3 md:hidden">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-primary text-primary" />
          ))}
          <span className="text-xs text-muted-foreground ml-1">+3.200</span>
        </div>
        <Button className="gold-gradient text-primary-foreground font-bold text-sm px-4 py-2 rounded-lg hover-glow" size="sm">
          <Scissors size={14} className="mr-1" /> AGENDE AGORA
        </Button>
      </div>
    </div>
  );
};

export default FloatingBar;
