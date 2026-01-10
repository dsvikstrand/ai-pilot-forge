import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { ArticleSchema } from "@/components/StructuredData";
import { PageBreadcrumb, BreadcrumbSchema } from "@/components/PageBreadcrumb";
import { RelatedServices } from "@/components/RelatedServices";
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
  const prefix = language === "sv" ? "/sv" : "/en";
  const baseUrl = "https://vdsai.se";
  const blogLabel = language === "sv" ? "Blogg" : "Blog";

  const t = (obj: { sv: string; en: string }) => obj[language];
  
  // Helper to get localized paths
  const getLocalizedPath = (basePath: string): string => {
    return basePath === "/" ? prefix : `${prefix}${basePath}`;
  };
  
  const getLocalizedBlogPath = (postSlug: string): string => {
    return language === "sv" ? `/sv/blog/${postSlug}` : `/blog/${postSlug}`;
  };

  if (!slug) {
    return <Navigate to={getLocalizedPath("/blog")} replace />;
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to={getLocalizedPath("/blog")} replace />;
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = getAllPosts()
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <Layout>
      <SEO
        titleEn={post.title.en}
        titleSv={post.title.sv}
        descriptionEn={post.description.en}
        descriptionSv={post.description.sv}
        type="article"
      />
      <ArticleSchema
        headline={post.title[language]}
        description={post.description[language]}
        author={post.author}
        datePublished={post.date}
        image={post.image}
        keywords={post.keywords}
      />
      <BreadcrumbSchema 
        items={[
          { name: language === "sv" ? "Hem" : "Home", url: `${baseUrl}${prefix}` },
          { name: blogLabel, url: `${baseUrl}${prefix}/blog` },
          { name: post.title[language], url: `${baseUrl}${prefix}/blog/${slug}` }
        ]} 
      />

      <article className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <div className="mx-auto max-w-3xl">
            <PageBreadcrumb 
              items={[
                { label: blogLabel, href: `${prefix}/blog` },
                { label: post.title[language] }
              ]} 
            />
          </div>

          {/* Article header */}
          <header className="mx-auto max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {post.title[language]}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {post.description[language]}
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
                {calculateReadingTime(post.content[language])} {t(blogPostTranslations.minRead)}
              </span>
            </div>

            {/* Featured image */}
            {post.image && (
              <div className="mt-8 aspect-video overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.title[language]}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </header>

          {/* Article content */}
          <div className="prose prose-lg mx-auto mt-12 max-w-3xl dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-code:rounded prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-pre:bg-muted prose-pre:border prose-pre:border-border">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeHighlight, rehypeKatex]}
            >
              {post.content[language]}
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
                    to={getLocalizedBlogPath(relatedPost.slug)}
                    className="group rounded-lg border border-border p-4 transition-colors hover:border-primary/50"
                  >
                    <h3 className="font-medium text-foreground group-hover:text-primary">
                      {relatedPost.title[language]}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {relatedPost.description[language]}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related services */}
          <div className="mx-auto mt-16 max-w-3xl">
            <RelatedServices maxItems={3} />
          </div>
        </div>
      </article>
    </Layout>
  );
}
