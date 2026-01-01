import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { ArticleSchema } from "@/components/StructuredData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { getPostBySlug, formatDate, calculateReadingTime, getAllPosts } from "@/lib/blog";

const blogPostTranslations = {
  backToBlog: { sv: "Tillbaka till bloggen", en: "Back to blog" },
  minRead: { sv: "min läsning", en: "min read" },
  relatedPosts: { sv: "Relaterade inlägg", en: "Related posts" },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();

  const t = (obj: { sv: string; en: string }) => obj[language];

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = getAllPosts()
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.description}
        canonical={`https://vds.se/blog/${post.slug}`}
        type="article"
      />
      <ArticleSchema
        headline={post.title}
        description={post.description}
        author={post.author}
        datePublished={post.date}
        image={post.image}
        keywords={post.keywords}
      />

      <article className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Back button */}
          <div className="mx-auto max-w-3xl">
            <Button variant="ghost" asChild className="mb-8">
              <Link to="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t(blogPostTranslations.backToBlog)}
              </Link>
            </Button>
          </div>

          {/* Article header */}
          <header className="mx-auto max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {post.description}
            </p>

            {/* Meta info */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date, language)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {calculateReadingTime(post.content)} {t(blogPostTranslations.minRead)}
              </span>
            </div>

            {/* Featured image */}
            {post.image && (
              <div className="mt-8 aspect-video overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </header>

          {/* Article content */}
          <div className="prose prose-lg mx-auto mt-12 max-w-3xl dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-code:rounded prose-code:bg-muted prose-code:px-1 prose-code:py-0.5">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Keywords */}
          {post.keywords.length > 0 && (
            <div className="mx-auto mt-12 max-w-3xl">
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <Badge key={keyword} variant="outline">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <section className="mx-auto mt-16 max-w-3xl border-t border-border pt-12">
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                {t(blogPostTranslations.relatedPosts)}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="group rounded-lg border border-border p-4 transition-colors hover:border-primary/50"
                  >
                    <h3 className="font-medium text-foreground group-hover:text-primary">
                      {relatedPost.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {relatedPost.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </Layout>
  );
}
