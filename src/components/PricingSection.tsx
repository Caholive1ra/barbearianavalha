import { Check, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Plano Platinum",
    price: "R$ 89,90",
    period: "/mês",
    popular: false,
    features: ["Corte de Cabelo", "Barba Simples"],
  },
  {
    name: "Plano Gold",
    price: "R$ 109,90",
    period: "/mês",
    popular: true,
    features: ["Corte de Cabelo", "Barba Simples", "Sobrancelha", "Hidratação"],
  },
];

const extras = ["Relaxamento", "Coloração", "Platinado", "Luzes"];

const PricingSection = () => {
  return (
    <section id="planos" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black">
            Escolha o Plano Que<br />
            <span className="gold-text">Eleva Seu Estilo.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-xl p-6 border transition-all hover-glow ${plan.popular ? "border-primary gold-glow bg-card" : "border-border bg-card"}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gold-gradient text-primary-foreground font-bold px-4">
                  <Crown size={14} className="mr-1" /> MAIS POPULAR
                </Badge>
              )}

              <div className="text-center mb-6 pt-2">
                <h3 className="text-xl font-bold">{plan.name}</h3>
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

              <Button className={`w-full rounded-lg font-bold py-5 hover-glow ${plan.popular ? "gold-gradient text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"}`}>
                QUERO ESTE PLANO
              </Button>
            </div>
          ))}

          {/* Extras */}
          <div className="rounded-xl p-6 border border-border bg-card">
            <h3 className="text-xl font-bold mb-4">Serviços Adicionais</h3>
            <div className="space-y-3">
              {extras.map((e) => (
                <div key={e} className="flex items-center gap-2">
                  <Check size={16} className="text-primary flex-shrink-0" />
                  <span className="text-sm">{e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
