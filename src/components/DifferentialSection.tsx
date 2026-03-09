import interior2 from "@/assets/interior2.jpg";
import logo from "@/assets/navalha-logo.png";
import { Button } from "@/components/ui/button";
import { Star, Scissors } from "lucide-react";

const DifferentialSection = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-on-scroll">
            <img src={interior2} alt="Interior da barbearia Navalha Sampa" className="rounded-xl w-full h-[400px] object-cover" />
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg">
              <img src={logo} alt="Logo Navalha Sampa" className="h-12" />
            </div>
          </div>

          <div className="space-y-6 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              1ª Barbearia<br />
              <span className="gold-text">Por Assinatura</span><br />
              No Centro de Sampa!
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              A Navalha Sampa nasceu com um propósito: oferecer o corte que muda sua imagem, sem surpresas no bolso. Com o Clube Flex, você tem acesso ilimitado a cortes de cabelo e barba de segunda a quinta, com a agilidade do Centro de São Paulo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nosso espaço combina o melhor da estética masculina com um ambiente moderno, cadeiras de couro premium e profissionais que entendem seu estilo. Agende online e venha viver a experiência.
            </p>

            <div className="flex items-center gap-2">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-primary text-primary" />)}</div>
              <span className="text-sm text-muted-foreground">+1.198 clientes satisfeitos</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="gold-gradient hover-glow text-primary-foreground font-bold px-6 py-5 rounded-lg">
                <Scissors className="mr-2" size={18} /> AGENDAR HORÁRIO
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-bold px-6 py-5 rounded-lg hover-glow">
                VER PLANOS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
