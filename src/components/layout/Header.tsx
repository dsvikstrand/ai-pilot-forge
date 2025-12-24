import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import vdsLogo from "@/assets/vds-logo.jpg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pilots", label: "AI Pilots" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Language */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <button className="px-2 py-1 font-medium text-foreground">EN</button>
            <span>/</span>
            <button className="px-2 py-1 hover:text-foreground">SV</button>
          </div>
          <Button asChild size="sm">
            <Link to="/contact">Book a call</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "bg-secondary text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <button className="font-medium text-foreground">EN</button>
                <span>/</span>
                <button className="hover:text-foreground">SV</button>
              </div>
              <Button asChild size="sm">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Book a call
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
