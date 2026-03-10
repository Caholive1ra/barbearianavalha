import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import logo from "@/assets/navalha-logo.png";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="container flex items-center justify-between h-20 md:h-24" aria-label="Navegação principal">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Navalha Sampa Barbearia" className="h-14 md:h-16" width="auto" height="64" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href + l.label} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://www.instagram.com/navalhasampabarbearia" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Navalha Sampa" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={18} /></a>
          <a href="https://wa.me/5511977518335" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Navalha Sampa" className="text-muted-foreground hover:text-[#25D366] transition-colors"><WhatsAppIcon size={18} /></a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border p-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href + l.label} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
