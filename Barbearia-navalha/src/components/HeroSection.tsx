import interior1 from "@/assets/interior1.jpg";
import interior2 from "@/assets/interior2.jpg";
import banner from "@/assets/banner.jpg";
import { Star, Scissors } from "lucide-react";

const APPBARBER_LINK = "https://sites.appbarber.com.br/httpsnvs";

const HeroSection = () => {
  return (
    <section className="relative pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface-dark" />
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-on-scroll">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">@navalhasampabarbearia</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Mais que corte,{" "}
              <span className="gold-text">é atitude.</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-md">
              A Barbearia Premium do Centro de Sampa. Estilo, conforto e planos de assinatura exclusivos para o seu dia a dia na República.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={APPBARBER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient hover-glow text-primary-foreground font-bold px-8 py-3 text-base rounded-lg inline-flex items-center"
              >
                <Scissors className="mr-2" size={18} />
                AGENDAR AGORA
              </a>
              <a
                href="#planos"
                className="border border-primary text-primary hover:bg-primary/10 font-bold px-8 py-3 text-base rounded-lg hover-glow inline-flex items-center"
              >
                VER PLANOS
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 h-[400px] md:h-[500px] animate-on-scroll">
            <div className="col-span-1 rounded-xl overflow-hidden">
              <img src={interior1} alt="Ambiente interno da barbearia Navalha Sampa no Centro de São Paulo, com cadeiras de barbeiro premium" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="col-span-1 rounded-xl overflow-hidden -mt-6">
              <img src={interior2} alt="Barbeiros profissionais realizando cortes de cabelo e barba na barbearia Navalha Sampa" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="col-span-1 rounded-xl overflow-hidden mt-6">
              <img src={banner} alt="Fachada e recepção da melhor barbearia no Centro de São Paulo, Navalha Sampa" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
