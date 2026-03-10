import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import client1 from "@/assets/client1.jpg";
import client2 from "@/assets/client2.jpg";
import client3 from "@/assets/client3.jpg";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

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
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section id="depoimentos" className="py-20">
      <div className="container">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-black">
            Quem Vive A <span className="gold-text">Experiência</span><br />
            Navalha Sampa Recomenda.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="bg-card border border-primary/30 rounded-xl p-6 hover-glow transition-all h-full">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-primary/50 text-primary hover:bg-primary/10" />
            <CarouselNext className="border-primary/50 text-primary hover:bg-primary/10" />
          </Carousel>

          {count > 0 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary scale-125" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
