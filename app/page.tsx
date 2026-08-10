export default function Home() {
  return (
    <div>
      <header className="site-header">
        <nav className="navbar">
          <a className="logo" href="#home">BD</a>

          <div className="nav-links">
            <a href="#about">Om mig</a>
            <a href="#projects">Projekter</a>
            <a href="#skills">Kompetencer</a>
            <a href="#education">Uddannelse</a>
            <a href="#contact">Kontakt</a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="hero section">
          <div className="hero-content">
            <p className="eyebrow">Data & Kommunikation · TEC Ballerup</p>
            <h1>Bedirhan Donmez</h1>
            <h2>Software Development Student</h2>
            <p className="hero-text">
              Jeg bygger Python-applikationer, arbejder med API&apos;er og udvikler moderne webprojekter.
              Mit mål er at blive stærkere inden for backend, databaser og praktisk softwareudvikling.
            </p>

            <div className="hero-buttons">
              <a className="btn primary" href="#projects">Se projekter</a>
              <a className="btn secondary" href="mailto:Bdrhn.dnz00@gmail.com">Kontakt mig</a>
            </div>

            <div className="social-links">
              <a href="https://github.com/BedirhanD04" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/bedirhan-donmez-98620b395/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:Bdrhn.dnz00@gmail.com">Email</a>
            </div>
          </div>

          <div className="hero-card">
            <img src="/bedirhan.jpeg" alt="Bedirhan Donmez" className="profile-image" />
            <div className="status-card">
              <span className="status-dot"></span>
              <span>Åben for praktik og junior-muligheder</span>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">Om mig</p>
            <h2>Motiveret IT-elev med fokus på softwareudvikling</h2>
          </div>

          <div className="glass-card">
            <p>
              Mit navn er Bedirhan Donmez, og jeg er under uddannelse inden for Data og Kommunikation
              på TEC Ballerup. Jeg har interesse for programmering, webudvikling, databaser og IT-support.
            </p>
            <br />
            <p>
              Jeg lærer bedst ved at bygge rigtige projekter. Derfor arbejder jeg løbende på egne projekter
              med Python, API&apos;er, HTML, CSS, JavaScript og SQL.
            </p>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Software Development Projects</h2>
          </div>

          <div className="project-grid">
            <article className="project-card">
              <h3>Weather Dashboard CLI</h3>
              <p>
                A command-line weather application that retrieves real-time weather
                information using the OpenWeather API.
              </p>
              <div className="tech-list">
                <span>Python</span>
                <span>REST API</span>
                <span>JSON</span>
              </div>
              <a className="btn secondary" href="https://github.com/BedirhanD04/weather-dashboard" target="_blank" rel="noopener noreferrer">GitHub</a>
            </article>

            <article className="project-card">
              <h3>Smart Budget Assistant</h3>
              <p>
                A lightweight personal finance application that helps users manage income and expenses.
              </p>
              <div className="tech-list">
                <span>Python</span>
                <span>JSON</span>
                <span>CLI</span>
              </div>
              <a className="btn secondary" href="https://github.com/BedirhanD04/budget_tracker" target="_blank" rel="noopener noreferrer">GitHub</a>
            </article>

            <article className="project-card">
              <h3>Excel Data Aggregator</h3>
              <p>
                Python automation tool that collects work hours from multiple Excel spreadsheets.
              </p>
              <div className="tech-list">
                <span>Python</span>
                <span>openpyxl</span>
                <span>Automation</span>
              </div>
              <a className="btn secondary" href="https://github.com/BedirhanD04/excel-report-automation" target="_blank" rel="noopener noreferrer">GitHub</a>
            </article>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">Kompetencer</p>
            <h2>Teknologier jeg arbejder med</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>🐍 Python</h3>
              <p>API&apos;er, CLI-apps, JSON og backend-logik.</p>
            </div>
            <div className="skill-card">
              <h3>🌐 HTML & CSS</h3>
              <p>Responsive layouts og moderne UI.</p>
            </div>
            <div className="skill-card">
              <h3>⚡ JavaScript</h3>
              <p>DOM manipulation, events og web-interaktivitet.</p>
            </div>
            <div className="skill-card">
              <h3>🗄️ SQL</h3>
              <p>Grundlæggende databaser ve queries.</p>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="section">
          <div className="section-heading">
            <p className="eyebrow">Baggrund</p>
            <h2>Uddannelse og erfaring</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">2025 - 2026</span>
              <div>
                <h3>TEC Ballerup · Grundforløb 2</h3>
                <p>Data og Kommunikation · fokus på IT og programmering.</p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2026 - nu</span>
              <div>
                <h3>TEC Ballerup · Skoleoplæring</h3>
                <p>Videre arbejde med praktiske IT-opgaver og softwareudvikling.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section">
          <div className="contact-card">
            <p className="eyebrow">Kontakt</p>
            <h2>Lad os tage kontakt</h2>
            <p>
              Jeg er interesseret i praktik og junior-muligheder.
            </p>
            <a className="btn primary" href="mailto:Bdrhn.dnz00@gmail.com">Send email</a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Bedirhan Donmez. Built with Next.js & Node.js.</p>
      </footer>
    </div>
  );
}