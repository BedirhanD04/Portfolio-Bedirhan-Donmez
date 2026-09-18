import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <Link className="logo" href="/">BD</Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">Om mig</Link>
          <Link href="/projects">Projekter</Link>
          <Link href="/kompetencer">Kompetencer</Link>
        </div>
      </nav>
    </header>
  );
}
