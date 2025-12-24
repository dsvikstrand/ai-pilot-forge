import { Layout } from "@/components/layout/Layout";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">Contact</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to explore what AI can do for your business? Let's have a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-soft">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Email</h3>
                <a
                  href="mailto:hello@vds.se"
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  hello@vds.se
                </a>
              </div>

              <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-soft">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Location</h3>
                <p className="text-sm text-muted-foreground">
                  Stockholm, Sweden
                </p>
              </div>

              <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-soft">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Linkedin className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Connect</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/V1kstrand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-accent"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-accent"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
};

export default Contact;
