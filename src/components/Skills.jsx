export default function Skills() {
  const skills = [
    "Java",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Python",
    "SQL",
    "Git & GitHub",
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
