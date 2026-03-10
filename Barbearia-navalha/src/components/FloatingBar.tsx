import { Star, Scissors } from "lucide-react";

const APPBARBER_LINK = "https://sites.appbarber.com.br/httpsnvs";

const FloatingBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border py-3 md:hidden">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-primary text-primary" />
          ))}
          <span className="text-xs text-muted-foreground ml-1">+1.198</span>
        </div>
        <a
          href={APPBARBER_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="gold-gradient text-primary-foreground font-bold text-sm px-4 py-2 rounded-lg hover-glow inline-flex items-center"
        >
          <Scissors size={14} className="mr-1" /> AGENDAR AGORA
        </a>
      </div>
    </div>
  );
};

export default FloatingBar;
