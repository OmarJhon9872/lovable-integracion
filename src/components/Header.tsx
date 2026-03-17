import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import mexicoFlag from "@/assets/mexico-flag.png";

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
        {/* Logo + Name */}
        <div className="flex items-center gap-2">
          <img
            src={mexicoFlag}
            alt="Bandera de México"
            className="w-8 h-8 rounded-full object-cover border-2 border-primary/30 shadow-sm"
          />
          <span
            className={`font-semibold transition-colors duration-300 ${
              scrolled ? "text-primary font-bold" : "text-white font-bold"
            }`}
          >
            Carlos Méndez
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="badge-accent hover-scale font-semibold text-sm hidden md:inline-flex"
          >
            Certificado ✓
          </a>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/10 transition-colors">
                <img
                  src={mexicoFlag}
                  alt="Menú"
                  className="w-7 h-7 rounded-full object-cover border-2 border-primary/30 shadow-sm md:hidden"
                />
                <Menu className={`w-5 h-5 transition-colors ${scrolled ? "text-primary" : "text-white"}`} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <div className="flex items-center gap-3 mb-8 mt-2">
                <img
                  src={mexicoFlag}
                  alt="Bandera de México"
                  className="w-10 h-10 rounded-full object-cover border-2 border-primary/30"
                />
                <span className="font-bold text-foreground text-lg">Carlos Méndez</span>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contacto"
                  className="badge-accent hover-scale font-semibold text-sm mt-4 justify-center"
                >
                  Certificado ✓
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
