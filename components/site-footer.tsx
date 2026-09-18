import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-socials">
        <a href="https://github.com/BedirhanD04" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <GithubIcon size={16} />
        </a>
        <a href="https://www.linkedin.com/in/bedirhan-donmez-98620b395/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <LinkedinIcon size={16} />
        </a>
        <a href="mailto:bdrhn.dnz00@gmail.com" aria-label="Email">
          <Mail size={16} />
        </a>
      </div>
      <p>© 2026 Bedirhan Donmez. Built with Next.js & Node.js.</p>
    </footer>
  );
}
