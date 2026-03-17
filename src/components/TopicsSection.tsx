import { motion } from "framer-motion";
import { Code2, Database, Globe, Layout, Server, Shield, Smartphone, Terminal, Workflow, Layers, GitBranch, Rocket } from "lucide-react";

const topics = [
  { icon: Layout, title: "Fundamentos de HTML & CSS", desc: "Estructura semántica, Flexbox, Grid y diseño responsivo." },
  { icon: Code2, title: "JavaScript Moderno", desc: "ES6+, async/await, closures y programación funcional." },
  { icon: Globe, title: "React & Ecosistema", desc: "Hooks, Context API, React Router y estado global." },
  { icon: Server, title: "Node.js & APIs REST", desc: "Express, middleware, autenticación y manejo de errores." },
  { icon: Database, title: "Bases de Datos", desc: "PostgreSQL, MongoDB, modelos de datos y migraciones." },
  { icon: Terminal, title: "DevOps & CI/CD", desc: "Docker, GitHub Actions, despliegue y monitoreo." },
  { icon: Shield, title: "Seguridad Web", desc: "OWASP, JWT, CORS y prevención de vulnerabilidades." },
  { icon: Smartphone, title: "Diseño Responsivo", desc: "Mobile-first, media queries y accesibilidad WCAG." },
  { icon: Workflow, title: "Metodologías Ágiles", desc: "Scrum, Kanban, sprints y gestión de proyectos." },
  { icon: Layers, title: "Arquitectura de Software", desc: "Patrones de diseño, microservicios y escalabilidad." },
  { icon: GitBranch, title: "Control de Versiones", desc: "Git avanzado, branching strategies y code review." },
  { icon: Rocket, title: "Proyecto Final", desc: "Aplicación full-stack desplegada en producción real." },
];

const TopicsSection = () => {
  return (
    <section id="temas" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge-accent mb-4 inline-block">Syllabus</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Temas Cursados
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Un recorrido técnico por las herramientas y metodologías aprendidas durante la certificación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.title}
              className="card-surface p-8 group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <span className="text-mono text-primary/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <topic.icon className="w-6 h-6 text-primary mt-3 mb-4" />
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {topic.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {topic.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
