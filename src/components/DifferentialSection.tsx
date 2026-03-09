import interiorImg from "@/assets/barbershop-interior.jpg";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Star, Scissors } from "lucide-react";

const DifferentialSection = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={interiorImg} alt="Interior da barbearia" className="rounded-xl w-full h-[400px] object-cover" />
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg">
              <img src={logo} alt="Logo" className="h-12" />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              1ª Barbearia<br />
              <span className="gold-text">Por Assinatura</span><br />
              Da Região!
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              A Styleth Barbearia nasceu com um objetivo claro: oferecer mais do que cortes de cabelo e barba, entregar uma experiência completa. Desde o início, buscamos um ambiente moderno, confortável e um atendimento que realmente entende o cliente.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Hoje, o cliente pode agendar online e receber um serviço de qualidade, com produtos selecionados e renovação para entregar o melhor da estética masculina.
            </p>

            <div className="flex items-center gap-2">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-primary text-primary" />)}</div>
              <span className="text-sm text-muted-foreground">+3.200 vidas transformadas</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="gold-gradient hover-glow text-primary-foreground font-bold px-6 py-5 rounded-lg">
                <Scissors className="mr-2" size={18} /> AGENDE AGORA
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
