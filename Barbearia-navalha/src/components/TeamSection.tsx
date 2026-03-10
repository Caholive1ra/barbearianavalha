import barber1 from "@/assets/barber1.jpg";
import barber2 from "@/assets/barber2.jpg";
import barber3 from "@/assets/barber3.jpg";

const barbers = [
  { name: "Ricardo 'Rico' Silva", role: "Especialista em Degradê", img: barber1 },
  { name: "Paulo Nava Junior", role: "Barbeiro & Barboterapia", img: barber2 },
  { name: "Davi Santos", role: "Coloração & Platinado", img: barber3 },
];

const TeamSection = () => {
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {barbers.map((b) => (
            <div key={b.name} className="animate-on-scroll group text-center">
              <div className="relative mx-auto w-40 h-40 mb-4">
                <div className="absolute inset-0 rounded-full gold-gradient opacity-40 group-hover:opacity-70 transition-opacity scale-105" />
                <img src={b.img} alt={b.name} className="w-full h-full object-cover rounded-full border-2 border-primary relative z-10 group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="bg-card border border-primary/30 rounded-xl p-4 hover-glow">
                <p className="font-bold text-sm">{b.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{b.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
