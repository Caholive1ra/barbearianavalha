import WhatsAppIcon from "@/components/WhatsAppIcon";

const WHATSAPP_LINK = "https://wa.me/5511977518335";

const FloatingWhatsApp = () => {
    return (
        <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco pelo WhatsApp"
            className="fixed bottom-20 md:bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
        >
            <WhatsAppIcon size={28} />
        </a>
    );
};

export default FloatingWhatsApp;
