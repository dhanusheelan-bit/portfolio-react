import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/dhanusheelan-bit/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setProjects(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      {loading && <p>Loading projects...</p>}

      <div className="projects-grid">
        {projects.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description provided."}</p>
            <div className="project-meta">
              ⭐ {repo.stargazers_count}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
