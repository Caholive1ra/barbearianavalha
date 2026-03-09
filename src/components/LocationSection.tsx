import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Map placeholder */}
          <div className="rounded-xl overflow-hidden h-[350px] border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0!2d-36.7!3d-7.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDAnMDAuMCJTIDM2wrA0MicwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
              title="Localização Styleth Barbearia"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-black">
              Encontre A<br />
              <span className="gold-text">Styleth Barbearia.</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Estamos localizados em um espaço aconchegante na cidade, com fácil acesso, estacionamento próximo e um ambiente perfeito para cuidar do seu visual com conforto.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Endereço</p>
                  <p className="text-sm text-muted-foreground">R. Tibúrcio Barbosa, Centro - Patos, PB</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Horário</p>
                  <p className="text-sm text-muted-foreground">Seg a Sex: 8h - 20h | Sáb: 8h - 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Contato</p>
                  <p className="text-sm text-muted-foreground">(83) 98100-4137</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
