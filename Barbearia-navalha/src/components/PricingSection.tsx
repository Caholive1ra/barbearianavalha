import { Check, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Clube Flex: Cabelo",
    price: "R$ 99,90",
    period: "/mês",
    popular: false,
    features: [
      "Corte de cabelo ilimitado de segunda à quinta-feira",
      "Desconto em Produtos",
    ],
  },
  {
    name: "Clube Flex: Cabelo + Barba",
    price: "R$ 189,90",
    period: "/mês",
    popular: true,
    features: [
      "Cabelo e barba ilimitados de segunda à quinta-feira",
      "Desconto em Produtos",
    ],
  },
  {
    name: "Clube Flex: Barba",
    price: "R$ 119,90",
    period: "/mês",
    popular: false,
    features: [
      "Corte de barba ilimitado de segunda à quinta-feira",
      "Desconto em Produtos",
    ],
  },
];

const extras = ["Barboterapia", "Relaxamento", "Coloração", "Penteado", "Luzes"];

const getWhatsAppLink = (planName: string) => {
  const message = encodeURIComponent(
    `Olá! Tenho interesse no plano "${planName}" da Navalha Sampa. Gostaria de mais informações.`
  );
  return `https://wa.me/5511977518335?text=${message}`;
};

const PricingSection = () => {
  return (
    <section id="planos" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-black">
            Escolha o Plano Que<br />
            <span className="gold-text">Eleva Seu Estilo.</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Corte Tradicional — a partir de <span className="font-bold text-primary">R$ 40,00</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`animate-on-scroll relative rounded-xl p-6 border transition-all hover-glow ${plan.popular
                ? "border-primary gold-glow bg-card md:scale-105 z-10"
                : "border-border bg-card"
                }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gold-gradient text-primary-foreground font-bold px-4">
                  <Crown size={14} className="mr-1" /> MAIS POPULAR
                </Badge>
              )}

              <div className="text-center mb-6 pt-2">
                <h3 className="text-lg font-bold gold-text">{plan.name}</h3>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mb-4">
                <span className="text-3xl font-black">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>

              <a
                href={getWhatsAppLink(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center rounded-lg font-bold py-3 hover-glow transition-colors ${plan.popular
                  ? "gold-gradient text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
              >
                QUERO ESTE PLANO
              </a>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll max-w-md mx-auto mt-10 rounded-xl p-6 border border-primary/30 bg-card text-center">
          <h3 className="text-xl font-bold gold-text mb-4">Serviços Adicionais</h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {extras.map((e) => (
              <div key={e} className="flex items-center gap-2">
                <Check size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
