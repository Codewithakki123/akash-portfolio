export default function App() {
  return (
    <div className="wrap">
      <header className="topbar">
        <span className="mark">Akash Tripathi</span>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" style={{ borderTop: 'none', paddingTop: 0 }}>
        <p className="role">Software Developer — Fresher</p>
        <h1>I build interfaces and apps that work the way people expect them to.</h1>
        <p className="lede">
          MCA student at Integral University, Lucknow, learning by building — mostly with
          React on the web and Flutter on mobile. Looking for my first full-time role
          in software development.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#projects">See my work</a>
          <a className="btn btn-outline" href="#contact">Get in touch</a>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About</h2>
        <p>
          I'm currently completing my MCA at Integral University, Lucknow. Over the course
          of my degree I've picked up both front-end and mobile development, and I'm
          comfortable moving between the two — building a UI in React one day and a Flutter
          screen the next. I like understanding how things are built end to end, so I've
          also spent time with the basics of .NET and SQL on the back-end side.
        </p>
        <dl className="about-grid">
          <div className="fact">
            <dt>Education</dt>
            <dd>MCA, Integral University, Lucknow</dd>
          </div>
          <div className="fact">
            <dt>Based in</dt>
            <dd>Lucknow, Uttar Pradesh, India</dd>
          </div>
          <div className="fact">
            <dt>Looking for</dt>
            <dd>Entry-level developer roles</dd>
          </div>
          <div className="fact">
            <dt>Open to</dt>
            <dd>Frontend, Mobile, Full Stack</dd>
          </div>
        </dl>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skill-groups">
          <div className="skill-group">
            <span className="label">Front-end</span>
            <div className="chip-row">
              <span className="chip">HTML</span>
              <span className="chip">CSS</span>
              <span className="chip">JavaScript</span>
              <span className="chip">React</span>
            </div>
          </div>
          <div className="skill-group">
            <span className="label">Mobile</span>
            <div className="chip-row">
              <span className="chip">Flutter</span>
            </div>
          </div>
          <div className="skill-group">
            <span className="label">Back-end &amp; data</span>
            <div className="chip-row">
              <span className="chip">.NET (basics)</span>
              <span className="chip">SQL (basics)</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <div className="project">
          <div className="project-head">
            <h3>Personal Portfolio</h3>
            <div className="project-links">
              <a href="#" target="_blank" rel="noreferrer">GitHub</a>
              <a href="#" target="_blank" rel="noreferrer">Live site</a>
            </div>
          </div>
          <p className="stack">React · Vite · CSS</p>
          <p className="desc">
            This site. Built to practice component structure and layout in React, and to
            have a live, working example of my front-end skills that's easy to share with
            recruiters. Deployed as a static site.
          </p>
        </div>

        <div className="project">
          <div className="project-head">
            <h3>To-Do List App</h3>
            <div className="project-links">
              <a href="#" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <p className="stack">Flutter · Dart</p>
          <p className="desc">
            A mobile task manager with add, complete, and delete flows, and tasks that
            persist between sessions. Built to learn Flutter's widget model and basic
            state management.
          </p>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Open to entry-level developer roles and happy to talk about any of the above.</p>
        <div className="contact-list">
          <a href="mailto:your-atripa7905@gmail.com">your-atripa7905@gmail.com</a>
          <a href="https://linkedin.com/in/akash-tripathi" target="_blank" rel="noreferrer">linkedin.com/in/akash-tripathi</a>
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer">github.com/your-username</a>
        </div>
      </section>

      <footer>Akash Tripathi · Built with React</footer>
    </div>
  )
}
