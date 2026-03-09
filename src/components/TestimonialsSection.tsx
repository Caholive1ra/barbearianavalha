import { Star } from "lucide-react";
import client1 from "@/assets/client1.jpg";
import client2 from "@/assets/client2.jpg";
import client3 from "@/assets/client3.jpg";

const testimonials = [
  {
    name: "Tiago Loureiro",
    text: "Experiência incrível! O ambiente é top, os profissionais são muito atenciosos. Recomendo demais!",
    img: client1,
  },
  {
    name: "Paulo Vinicius",
    text: "A melhor barbearia da região. Atendimento personalizado e resultado sempre perfeito.",
    img: client2,
  },
  {
    name: "Tiago Roberts",
    text: "Desde que descobri a Navalha Sampa, não vou em outro lugar. O Clube Flex é genial!",
    img: client3,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20">
      <div className="container">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-black">
            Quem Vive A <span className="gold-text">Experiência</span><br />
            Navalha Sampa Recomenda.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="animate-on-scroll bg-card border border-primary/30 rounded-xl p-6 hover-glow transition-all">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-primary" />
                <span className="font-semibold text-sm">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
