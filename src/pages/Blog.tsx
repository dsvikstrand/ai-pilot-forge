import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/i18n/LanguageContext";
import { getAllPosts, formatDate, calculateReadingTime } from "@/lib/blog";

const blogTranslations = {
  title: { sv: "Blogg", en: "Blog" },
  subtitle: { 
    sv: "Insikter om AI, maskininlärning och praktiska lösningar för svenska företag.", 
    en: "Insights on AI, machine learning, and practical solutions for Swedish businesses." 
  },
  readMore: { sv: "Läs mer", en: "Read more" },
  minRead: { sv: "min läsning", en: "min read" },
  noPosts: { sv: "Inga inlägg ännu.", en: "No posts yet." },
};

export default function Blog() {
  const { language } = useLanguage();
  const posts = getAllPosts();

  const t = (obj: { sv: string; en: string }) => obj[language];
  
  // Helper to get localized blog post path
  const getLocalizedBlogPath = (slug: string): string => {
    return language === "sv" ? `/sv/blog/${slug}` : `/blog/${slug}`;
  };

  return (
    <Layout>
      <SEO
        titleEn="Blog - AI Insights & Practical Solutions"
        titleSv="Blogg - AI-insikter & praktiska lösningar"
        descriptionEn="Insights on AI, machine learning, and practical solutions for Swedish SMEs. Learn about RAG systems, visual search, and AI implementation strategies."
        descriptionSv="Insikter om AI, maskininlärning och praktiska lösningar för svenska SMF. Läs om RAG-system, visuell sökning och AI-implementeringsstrategier."
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {t(blogTranslations.title)}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t(blogTranslations.subtitle)}
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="mx-auto mt-16 max-w-5xl">
            {posts.length === 0 ? (
              <p className="text-center text-muted-foreground">{t(blogTranslations.noPosts)}</p>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link key={post.slug} to={getLocalizedBlogPath(post.slug)}>
                    <Card className="group h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                      {post.image && (
                        <div className="aspect-video overflow-hidden rounded-t-lg">
                          <img
                            src={post.image}
                            alt={post.title[language]}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{post.category}</Badge>
                        </div>
                        <CardTitle className="line-clamp-2 text-xl group-hover:text-primary">
                          {post.title[language]}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {post.description[language]}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {formatDate(post.date, language)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {calculateReadingTime(post.content[language])} {t(blogTranslations.minRead)}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                          {t(blogTranslations.readMore)}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
