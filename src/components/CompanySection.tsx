import { motion } from "framer-motion";
import { Award, BookOpen, Users, Zap, Monitor, HeartHandshake } from "lucide-react";

const benefits = [
  { icon: BookOpen, title: "Programa actualizado", desc: "Contenido alineado con las tendencias más recientes del mercado." },
  { icon: Users, title: "Mentores expertos", desc: "Acompañamiento de profesionales activos en la industria." },
  { icon: Zap, title: "Aprendizaje práctico", desc: "80% del programa basado en proyectos reales." },
  { icon: Monitor, title: "Herramientas profesionales", desc: "Acceso a plataformas y entornos de desarrollo enterprise." },
  { icon: Award, title: "Certificación reconocida", desc: "Avalada por empresas líderes del sector tecnológico." },
  { icon: HeartHandshake, title: "Red de contactos", desc: "Comunidad activa de egresados y oportunidades laborales." },
];

const CompanySection = () => {
  return (
    <section id="empresa" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Company Info - 3 cols */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge-accent mb-4 inline-block">La Empresa</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              TechAcademy
            </h2>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-xl">
              TechAcademy es una institución líder en formación tecnológica, dedicada a transformar 
              carreras profesionales a través de programas intensivos y prácticos. Con más de 5 años 
              de experiencia, han formado a más de 2,000 profesionales en desarrollo de software.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {["5+ Años", "2,000+ Egresados", "50+ Empresas aliadas", "95% Empleabilidad"].map((tag) => (
                <span key={tag} className="badge-accent">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Benefits - 2 cols */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">Beneficios del programa</h3>
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/60 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{b.title}</h4>
                  <p className="text-muted-foreground text-xs mt-1">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
