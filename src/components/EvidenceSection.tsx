import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "E-Commerce Platform", tech: "React · Node.js · PostgreSQL", desc: "Plataforma de comercio electrónico con carrito, pagos y panel de administración." },
  { title: "Task Management App", tech: "React · Firebase · Tailwind", desc: "Aplicación de gestión de tareas con drag & drop y colaboración en tiempo real." },
  { title: "API REST de Blog", tech: "Express · MongoDB · JWT", desc: "API RESTful completa con autenticación, roles y documentación Swagger." },
  { title: "Portfolio Personal", tech: "React · Framer Motion · CSS", desc: "Sitio web personal con animaciones, diseño responsivo y modo oscuro." },
];

const EvidenceSection = () => {
  return (
    <section id="evidencia" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-accent mb-4 inline-block">Portafolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Evidencia de Proyectos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="card-surface p-8 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-mono text-primary/50">{project.tech}</span>
                  <h3 className="text-xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvidenceSection;
