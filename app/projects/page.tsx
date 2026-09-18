import { ExternalLink } from "lucide-react";
import Velaris from "@/components/ui/velaris";
import { GithubIcon } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

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

      <SiteHeader />



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
                A RESTful backend API for managing a library&apos;s books, authors, members,
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


      <SiteFooter />
    </div>
  );
}
