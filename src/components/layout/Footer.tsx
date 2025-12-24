import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import vdsLogo from "@/assets/vds-logo.jpg";

const footerLinks = {
  company: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pilots", label: "AI Pilots" },
    { href: "/about", label: "About" },
  ],
  legal: [
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={vdsLogo} 
                alt="VDS Logo" 
                className="h-10 w-10 rounded-md object-cover"
              />
              <span className="text-lg font-semibold text-foreground">
                Vikstrand Deep Solutions
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              GPU-powered AI pilots for Swedish SMEs. From idea to working prototype—fast, measurable, and built to ship.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/V1kstrand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Vikstrand Deep Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
