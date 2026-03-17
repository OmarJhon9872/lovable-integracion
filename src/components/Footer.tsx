import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Carlos Méndez</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Desarrollador Full Stack certificado, apasionado por crear experiencias digitales que marquen la diferencia.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest text-primary-foreground/50">
              Enlaces
            </h4>
            <div className="space-y-3">
              {["Temas", "Evidencia", "Empresa"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest text-primary-foreground/50">
              Contacto
            </h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "mailto:carlos@example.com" },
                { icon: ExternalLink, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors hover-scale"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40">
          © 2026 Carlos Méndez · Certificación Full Stack · TechAcademy
        </div>
      </div>
    </footer>
  );
};

export default Footer;
