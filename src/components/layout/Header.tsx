import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import vdsLogo from "@/assets/vds-logo.jpg";

const customAINav = { sv: "Skräddarsydd AI", en: "Custom AI" };
const aiReadinessNav = { sv: "AI-beredskapstest", en: "AI Readiness Test" };
const blogNav = { sv: "Blogg", en: "Blog" };

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  const navLinks = [
    { href: "/", label: t(translations.nav.home, language) },
    { href: "/services", label: t(translations.nav.services, language) },
    { href: "/custom-ai", label: t(customAINav, language) },
    { href: "/agentic-workflows", label: t(translations.nav.agenticWorkflows, language) },
    { href: "/blog", label: t(blogNav, language) },
    { href: "/about", label: t(translations.nav.about, language) },
    { href: "/contact", label: t(translations.nav.contact, language) },
  ];

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
            <button 
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 transition-colors ${language === "en" ? "font-medium text-foreground" : "hover:text-foreground"}`}
            >
              EN
            </button>
            <span>/</span>
            <button 
              onClick={() => setLanguage("sv")}
              className={`px-2 py-1 transition-colors ${language === "sv" ? "font-medium text-foreground" : "hover:text-foreground"}`}
            >
              SV
            </button>
          </div>
          <Button asChild size="sm">
            <Link to="/ai-readiness-test">{t(aiReadinessNav, language)}</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/contact">{t(translations.nav.bookCall, language)}</Link>
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

      {/* Mobile Menu with animation */}
      <div 
        className={`absolute left-0 right-0 top-16 z-40 border-b border-border bg-background shadow-medium transition-all duration-300 ease-out md:hidden ${
          mobileMenuOpen 
            ? "translate-y-0 opacity-100" 
            : "-translate-y-4 pointer-events-none opacity-0"
        }`}
      >
        <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-md px-4 py-3 text-sm font-medium transition-all ${
                location.pathname === link.href
                  ? "bg-secondary text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
              style={{ 
                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <button 
                onClick={() => setLanguage("en")}
                className={`rounded px-2 py-1 transition-colors hover:bg-secondary ${language === "en" ? "font-medium text-foreground" : "hover:text-foreground"}`}
              >
                EN
              </button>
              <span>/</span>
              <button 
                onClick={() => setLanguage("sv")}
                className={`rounded px-2 py-1 transition-colors hover:bg-secondary ${language === "sv" ? "font-medium text-foreground" : "hover:text-foreground"}`}
              >
                SV
              </button>
            </div>
            <div className="flex gap-2">
              <Button asChild size="sm">
                <Link to="/ai-readiness-test" onClick={() => setMobileMenuOpen(false)}>
                  {t(aiReadinessNav, language)}
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  {t(translations.nav.bookCall, language)}
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
