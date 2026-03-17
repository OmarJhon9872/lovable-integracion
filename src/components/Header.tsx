import { useState, useEffect } from "react";

const navLinks = [
  { label: "Temas", href: "#temas" },
  { label: "Evidencia", href: "#evidencia" },
  { label: "Empresa", href: "#empresa" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-header shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🇲🇽</span>
          <span className="font-semibold text-foreground">Carlos Méndez</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="badge-accent hover-scale font-semibold text-sm"
        >
          Certificado ✓
        </a>
      </div>
    </header>
  );
};

export default Header;
