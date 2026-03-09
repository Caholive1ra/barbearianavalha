import { Instagram, Facebook, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contato" className="border-t border-border py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Styleth Barbearia" className="h-10" />

          <p className="text-sm text-muted-foreground">
            ©2025 Styleth Barbearia | Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Phone size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
