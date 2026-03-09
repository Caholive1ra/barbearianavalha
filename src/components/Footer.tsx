import { Instagram, Phone } from "lucide-react";
import logo from "@/assets/navalha-logo.png";

const Footer = () => {
  return (
    <footer id="contato" className="border-t border-border py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Navalha Sampa Barbearia" className="h-10" />

          <p className="text-sm text-muted-foreground">
            ©2025 Navalha Sampa Barbearia | Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/navalhasampabarbearia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="tel:+5511977518335" className="text-muted-foreground hover:text-primary transition-colors"><Phone size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
