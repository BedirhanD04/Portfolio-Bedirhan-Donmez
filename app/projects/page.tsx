import { Mail, Terminal, Globe, Zap, Database, Calendar, ExternalLink, Code2 } from "lucide-react";
import Velaris from "@/components/ui/velaris";

// lucide-react no longer ships trademarked brand logos, so GitHub/LinkedIn
// are rendered as small inline SVG marks instead.
function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.94c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.08.78 2.18v3.23c0 .31.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <div>
      <Velaris
        className="fixed inset-0 -z-10 pointer-events-none"
        height="100vh"
        bg="#040810"
        colors={["#60a5fa", "#3b82f6", "#1d4ed8", "#040810"]}
        speed={1.1}
        grain={0.25}
      />

      <header className="site-header">
        <nav className="navbar">
          <a className="logo" href="#home">BD</a>

          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/about">Om mig</a>
            <a href="/projects">Projekter</a>
            <a href="/kompetencer">Kompetencer</a>
          </div>
        </nav>
      </header>


        
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
              <div className="project-links">
                <a className="btn secondary" href="https://github.com/BedirhanD04/weather-dashboard" target="_blank" rel="noopener noreferrer">
                  <GithubIcon size={16} /> GitHub
                </a>
              </div>
            </article>

            <article className="project-card">
              <h3>Library Management System</h3>
              <p>
                A RESTful backend API for managing a library's books, authors, members,
                and loans, built with a clean N-tier (layered) architecture and real
                business rules for stock tracking and loan limits.
              </p>
              <div className="tech-list">
                <span>C#</span>
                <span>ASP.NET Core</span>
                <span>Entity Framework Core</span>
              </div>
              <div className="project-links">
                <a className="btn secondary" href="https://github.com/BedirhanD04/LibraryManagementSystem" target="_blank" rel="noopener noreferrer">
                  <GithubIcon size={16} /> GitHub
                </a>
              </div>
            </article>

            <article className="project-card">
              <h3>Smart Data Analysis Platform</h3>
              <p>
                A full-stack B2B SaaS platform where users upload a CSV or Excel file and instantly get row/column statistics and auto-generated charts. Note: This site is currently an interactive demo.
              </p>
              <div className="tech-list">
                <span>Next.js (App Router) + TypeScript</span>
                <span>Node.js</span>
                <span>Python</span>
              </div>
              <div className="project-links">
                <a className="btn secondary" href="https://data-saas-platform.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} /> Website
                </a>
              </div>
            </article>
          </div>
        </section>
        

      <footer>
        <div className="footer-socials">
          <a href="https://github.com/BedirhanD04" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={16} />
          </a>
          <a href="https://www.linkedin.com/in/bedirhan-donmez-98620b395/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={16} />
          </a>
          <a href="mailto:Bdrhn.dnz00@gmail.com" aria-label="Email">
            <Mail size={16} />
          </a>
        </div>
        <p>© 2026 Bedirhan Donmez. Built with Next.js & Node.js.</p>
      </footer>
    </div>
  );
}