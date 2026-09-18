import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import Velaris from "@/components/ui/velaris";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
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

      <main>
        {/* HERO SECTION */}
        <section id="home" className="hero section">
          <div className="hero-content">
            <p className="eyebrow">Data & Kommunikation · TEC Ballerup</p>
            <h1>Bedirhan Donmez</h1>
            <h2>Software Development Student</h2>

            <div className="hero-buttons">
              <Link className="btn primary" href="/projects">Se projekter</Link>
              <a className="btn secondary" href="mailto:bdrhn.dnz00@gmail.com">Kontakt mig</a>
            </div>

            <div className="social-links">
              <a href="https://github.com/BedirhanD04" target="_blank" rel="noopener noreferrer">
                <GithubIcon /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/bedirhan-donmez-98620b395/" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon /> LinkedIn
              </a>
              <a href="mailto:bdrhn.dnz00@gmail.com">
                <Mail size={18} /> Email
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-photo-wrap">
              <Image
                src="/bedirhan.jpeg"
                alt="Bedirhan Donmez"
                className="profile-image"
                width={250}
                height={250}
                priority
              />
              <div className="status-card">
                <span className="status-dot"></span>
                <span>Åben for praktik og junior-muligheder</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
