import { Instagram } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import logo from "@/assets/navalha-logo.png";

const Footer = () => {
  return (
    <footer id="contato" className="border-t border-border py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Navalha Sampa Barbearia" className="h-16" />

          <p className="text-sm text-muted-foreground">
            ©{new Date().getFullYear()} Navalha Sampa Barbearia | Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/navalhasampabarbearia" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Navalha Sampa" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="https://wa.me/5511977518335" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Navalha Sampa" className="text-muted-foreground hover:text-[#25D366] transition-colors"><WhatsAppIcon size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
