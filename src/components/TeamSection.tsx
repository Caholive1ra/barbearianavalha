import barber1 from "@/assets/barber1.jpg";
import barber2 from "@/assets/barber2.jpg";
import barber3 from "@/assets/barber3.jpg";

const barbers = [
  { name: "Reymon de Souza", img: barber1 },
  { name: "Mateus Pinheiro", img: barber2 },
  { name: "Rogê Santos", img: barber3 },
];

const TeamSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black">
            Nossos <span className="gold-text">Barbeiros</span>:
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Conheça os profissionais que vão cuidar do seu estilo com maestria.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {barbers.map((b) => (
            <div key={b.name} className="group relative">
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 gold-gradient opacity-30 group-hover:opacity-50 transition-opacity" />
                <img src={b.img} alt={b.name} className="w-full aspect-square object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                  <p className="font-bold text-sm">{b.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
