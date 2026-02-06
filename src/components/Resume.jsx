export default function Resume() {
  return (
    <section className="resume" id="resume">
      <h2>Resume</h2>

      <p className="resume-text">
        Download my resume to know more about my skills, education,
        and experience.
      </p>

      <a
        href="/resume.pdf"
        download
        className="resume-btn"
      >
        Download Resume
      </a>
    </section>
  );
}
