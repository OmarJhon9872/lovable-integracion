import { motion } from "framer-motion";

const stats = [
  { value: "320+", label: "Horas de formación" },
  { value: "12", label: "Módulos completados" },
  { value: "4", label: "Proyectos entregados" },
  { value: "100%", label: "Aprobación" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-black text-primary-foreground font-mono">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/70 mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
