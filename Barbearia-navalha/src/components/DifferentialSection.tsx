import interior2 from "@/assets/interior2.jpg";
import logo from "@/assets/navalha-logo.png";
import { Star, Scissors } from "lucide-react";

const APPBARBER_LINK = "https://sites.appbarber.com.br/httpsnvs";

const DifferentialSection = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-on-scroll">
            <img src={interior2} alt="Interior da barbearia Navalha Sampa com ambiente acolhedor" className="rounded-xl w-full h-[400px] object-cover" loading="lazy" decoding="async" />
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg">
              <img src={logo} alt="Logo Navalha Sampa" className="h-12" />
            </div>
          </div>

          <div className="space-y-6 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              O Sucesso é<br />
              <span className="gold-text">Compartilhado.</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              A história da Navalha Sampa começa com nosso fundador, Jair Badia, um verdadeiro exemplo de superação. Buscamos muito mais do que apenas cortar cabelo: queremos transformar o universo da barbearia.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Aqui, você não é apenas mais um, você faz parte de um time que acredita no talento, na liberdade e no respeito ao seu estilo.
            </p>

            <div className="flex items-center gap-2">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-primary text-primary" />)}</div>
              <span className="text-sm text-muted-foreground">+1.198 clientes satisfeitos</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={APPBARBER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient hover-glow text-primary-foreground font-bold px-6 py-3 rounded-lg inline-flex items-center"
              >
                <Scissors className="mr-2" size={18} /> AGENDAR AGORA
              </a>
              <a
                href="#planos"
                className="border border-primary text-primary hover:bg-primary/10 font-bold px-6 py-3 rounded-lg hover-glow inline-flex items-center"
              >
                VER PLANOS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
