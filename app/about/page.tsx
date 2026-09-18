import { Calendar } from "lucide-react";
import Velaris from "@/components/ui/velaris";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function About() {
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

        {/* ABOUT SECTION */}
        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">Om mig</p>
          </div>

          <div className="glass-card">
            <p>
              Mit navn er Bedirhan Dønmez, og jeg er under uddannelse inden for Data og Kommunikation med speciale i programmering på TEC Ballerup.
              Min interesse for teknologi startede med nysgerrighed for, hvordan systemer hænger sammen bag kulisserne,
              og har siden udviklet sig til en passion for at bygge løsninger fra bunden.
              Jeg arbejder primært med backend-udvikling i Python og C#/.NET, hvor jeg har erfaring med RESTful API&apos;er, databasedesign og CRUD-operationer i MSSQL Server.
              På frontend-siden er jeg i gang med at lære React, efter tidligere at have arbejdet med HTML, CSS og JavaScript i praktiske projekter.
              Jeg har blandt andet bygget et C#-konsolspil, en SQL-database med tilhørende WinForms-applikation, og et interaktivt spil i JavaScript med API-integration.
              Mit mål er at udvikle mig til en stærk full-stack udvikler og bidrage til projekter, hvor jeg både kan udfordre mig selv og skabe reel værdi.
            </p>
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
              <span className="timeline-date"><Calendar size={16} /> 2025 - 2026</span>
              <div>
                <h3>TEC Ballerup · Grundforløb 2</h3>
                <p>Data og Kommunikation · fokus på IT og programmering.</p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date"><Calendar size={16} /> 2026 - nu</span>
              <div>
                <h3>TEC Ballerup · Skoleoplæring</h3>
                <p>Videre arbejde med praktiske IT-opgaver og softwareudvikling.</p>
              </div>
            </div>
          </div>
        </section>
       </main>

      <SiteFooter />
    </div>
  );
}
