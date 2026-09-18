import { Terminal, Globe, Zap, Database, Code2 } from "lucide-react";
import Velaris from "@/components/ui/velaris";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function Kompetencer() {
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


        {/* SKILLS SECTION */}
        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">Kompetencer</p>
            <h2>Teknologier jeg arbejder med</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <span className="skill-icon"><Terminal size={20} /></span>
              <h3>Python</h3>
              <p>API&apos;er, CLI-apps, JSON og backend-logik.</p>
            </div>
            <div className="skill-card">
              <span className="skill-icon"><Globe size={20} /></span>
              <h3>HTML & CSS</h3>
              <p>Responsive layouts og moderne UI.</p>
            </div>
            <div className="skill-card">
              <span className="skill-icon"><Zap size={20} /></span>
              <h3>JavaScript</h3>
              <p>DOM manipulation, events og web-interaktivitet.</p>
            </div>
            <div className="skill-card">
              <span className="skill-icon"><Database size={20} /></span>
              <h3>SQL</h3>
              <p>databaser ve queries.</p>
            </div>
            <div className="skill-card">
              <span className="skill-icon"><Code2 size={20} /></span>
              <h3>C#</h3>
              <p>Objektorienteret programmering og .NET-udvikling..</p>
            </div>
          </div>
        </section>


      <SiteFooter />
    </div>
  );
}
