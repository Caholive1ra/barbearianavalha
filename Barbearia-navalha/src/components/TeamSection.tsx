import { useState, useEffect } from "react";
import barber1 from "@/assets/barber1.jpg";
import barber2 from "@/assets/barber2.jpg";
import barber3 from "@/assets/barber3.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const barbers = [
  { name: "Ricardo 'Rico' Silva", role: "Especialista em Degradê", img: barber1 },
  { name: "Paulo Nava Junior", role: "Barbeiro & Barboterapia", img: barber2 },
  { name: "Davi Santos", role: "Coloração & Platinado", img: barber3 },
];

const BarberCard = ({ b }: { b: typeof barbers[0] }) => (
  <div className="group text-center">
    <div className="relative mx-auto w-40 h-40 mb-4">
      <div className="absolute inset-0 rounded-full gold-gradient opacity-40 group-hover:opacity-70 transition-opacity scale-105" />
      <img src={b.img} alt={`Foto do barbeiro especialista ${b.name} - Navalha Sampa`} className="w-full h-full object-cover rounded-full border-2 border-primary relative z-10 group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="bg-card border border-primary/30 rounded-xl p-4 hover-glow">
      <p className="font-bold text-sm">{b.name}</p>
      <p className="text-xs text-muted-foreground mt-1">{b.role}</p>
    </div>
  </div>
);

const TeamSection = () => {
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
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-black">
            Nossos <span className="gold-text">Barbeiros</span>:
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Conheça os profissionais que vão cuidar do seu estilo com maestria.
          </p>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {barbers.map((b) => (
            <div key={b.name} className="animate-on-scroll">
              <BarberCard b={b} />
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden px-4">
          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {barbers.map((b) => (
                <CarouselItem key={b.name} className="basis-[80%]">
                  <BarberCard b={b} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-primary/50 text-primary hover:bg-primary/10 -left-2" />
            <CarouselNext className="border-primary/50 text-primary hover:bg-primary/10 -right-2" />
          </Carousel>

          {count > 0 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary scale-125" : "bg-muted-foreground/30"
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

export default TeamSection;
