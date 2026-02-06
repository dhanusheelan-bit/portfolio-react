export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built using React and modern CSS.",
    },
    {
      title: "Student Management System",
      description: "Web application to manage students, courses, and records.",
    },
    {
      title: "To-Do App",
      description: "Simple task manager built with JavaScript and React.",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
