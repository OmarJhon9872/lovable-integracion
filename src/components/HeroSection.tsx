import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/50 to-foreground/80" />
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-accent mb-6 inline-block">
            🎓 Certificación Completada
          </span>
        </motion.div>

        <motion.h1
          className="text-display text-primary-foreground mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Carlos Méndez
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-primary-foreground/80 mt-4 max-w-2xl mx-auto font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Desarrollo Web Full Stack
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mt-10 font-mono text-sm text-primary-foreground/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span>12 Módulos</span>
          <span className="w-1 h-1 rounded-full bg-primary-foreground/40" />
          <span>4 Proyectos</span>
          <span className="w-1 h-1 rounded-full bg-primary-foreground/40" />
          <span>100% Completado</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
