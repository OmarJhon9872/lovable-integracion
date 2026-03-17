import { motion } from "framer-motion";

const tools = [
  "React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Docker",
  "Git", "Figma", "VS Code", "Postman", "Tailwind CSS", "Express",
  "GitHub Actions", "Vercel", "Firebase", "Redux",
];

const ToolsSlider = () => {
  return (
    <section className="py-16 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.p
          className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Herramientas y Tecnologías Utilizadas
        </motion.p>
      </div>
      <div className="relative">
        <div className="flex animate-slide-left w-max">
          {[...tools, ...tools].map((tool, i) => (
            <div
              key={`${tool}-${i}`}
              className="flex-shrink-0 mx-3 px-6 py-3 rounded-xl bg-card font-mono text-sm text-foreground border border-border/50 hover:border-primary/30 hover:text-primary transition-colors cursor-default"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSlider;
