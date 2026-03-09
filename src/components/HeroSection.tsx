import { Button } from "@/components/ui/button";
import heroImg from "@/assets/barber-hero.jpg";
import barber1 from "@/assets/barber1.jpg";
import barber3 from "@/assets/barber3.jpg";
import { Star, Scissors } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface-dark" />
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">+3.200 vidas transformadas</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              A Experiência Que{" "}
              <span className="gold-text">Seu Estilo</span>{" "}
              Merece.
            </h1>

            <p className="text-muted-foreground text-lg max-w-md">
              A barbearia que entende seu estilo, ambiente moderno, atendimento personalizado.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="gold-gradient hover-glow text-primary-foreground font-bold px-8 py-6 text-base rounded-lg">
                <Scissors className="mr-2" size={18} />
                AGENDE AGORA
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-bold px-8 py-6 text-base rounded-lg hover-glow">
                VER PLANOS
              </Button>
            </div>
          </div>

          {/* Right - Mosaic */}
          <div className="grid grid-cols-3 gap-3 h-[400px] md:h-[500px]">
            <div className="col-span-1 rounded-xl overflow-hidden">
              <img src={barber1} alt="Corte premium" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 rounded-xl overflow-hidden -mt-6">
              <img src={heroImg} alt="Barbearia premium" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 rounded-xl overflow-hidden mt-6">
              <img src={barber3} alt="Barbeiro profissional" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
