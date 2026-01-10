import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { getAllPosts } from "@/lib/blog";

interface BlogCTAProps {
  maxPosts?: number;
}

export function BlogCTA({ maxPosts = 2 }: BlogCTAProps) {
  const { language } = useLanguage();
  const prefix = language === "sv" ? "/sv" : "/en";
  const posts = getAllPosts().slice(0, maxPosts);

  if (posts.length === 0) return null;

  const title = language === "sv" ? "Från bloggen" : "From the blog";
  const readMore = language === "sv" ? "Läs mer" : "Read more";
  const viewAll = language === "sv" ? "Alla inlägg" : "All posts";

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold text-foreground">{title}</h2>
            </div>
            <Link 
              to={`${prefix}/blog`}
              className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              {viewAll}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                to={language === "sv" ? `/sv/blog/${post.slug}` : `/blog/${post.slug}`}
                className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50"
              >
                <h3 className="font-medium text-foreground group-hover:text-primary line-clamp-2">
                  {post.title[language]}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {post.description[language]}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {readMore}
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
