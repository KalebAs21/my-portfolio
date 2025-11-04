import React from "react";
import { Github, ExternalLink } from "lucide-react"; // icons from lucide-react

const projects = [
  {
    id: 2,
    title: "Food Delivery Web App",
    description: "A responsive food ordering platform that allows users to browse restaurants and track their orders in real-time.",
    image: "/images/foodapp.png",
    technologies: ["Next.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/KalebAs21/food-del",
    demo: "https://food-delivery-demo.vercel.app",
  },
  {
    id: 1,
    title: "Amazon Web App",
    description: "A full-stack e-commerce platform inspired by Amazon, featuring product listings, cart, and checkout functionalities.",
    image: "/images/amazon.png",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/KalebAs21/javascript-amazon-project",
    demo: "https://amazon-clone-demo.vercel.app",
  },
  
  {
    id: 3,
    title: "Local Service Web App",
    description: "A marketplace for finding nearby services like electricians, plumbers, and tutors, with user reviews and location filtering.",
    image: "/images/serviceapp.png",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/KalebAs21/local-service-",
    demo: "https://local-service-app.vercel.app",
  },
  {
    id: 4,
    title: "Mentorship Platform",
    description: "A platform connecting university freshmen with senior mentors for guidance, built with Node.js and React.",
    image: "/images/mentorship.png",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/tewmih/student-mentorship-management",
    demo: "https://mentorship-demo.vercel.app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-background/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {/* <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground p-2 rounded-full hover:scale-110 transition"
                  >
                    <ExternalLink size={20} />
                  </a> */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground p-2 rounded-full hover:scale-110 transition"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-secondary/70 text-foreground px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links (for small screens) */}
                <div className="flex gap-4 md:hidden">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
