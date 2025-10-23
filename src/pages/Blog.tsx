import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "Announcing $10M Seed Round",
      excerpt: "We're excited to announce our $10M seed round to accelerate the development of autonomous AI Workers for enterprise operations.",
      date: "March 15, 2024",
      slug: "seed-announcement",
      category: "Company News"
    },
    {
      title: "The Future of IT Operations",
      excerpt: "How AI Workers are transforming IT helpdesks and support operations across Fortune 500 companies.",
      date: "March 10, 2024",
      slug: "future-of-it-ops",
      category: "Industry Insights"
    },
    {
      title: "Building Multi-Agent AI Systems",
      excerpt: "A deep dive into the architecture and design patterns behind our autonomous AI Workers.",
      date: "March 5, 2024",
      slug: "multi-agent-systems",
      category: "Technology"
    },
    {
      title: "AI Workers in HR: Case Study",
      excerpt: "How a leading tech company automated 80% of their employee onboarding process with AI Workers.",
      date: "February 28, 2024",
      slug: "hr-case-study",
      category: "Case Studies"
    },
    {
      title: "Security and Compliance in AI",
      excerpt: "Our approach to ensuring enterprise-grade security and regulatory compliance in AI-powered operations.",
      date: "February 20, 2024",
      slug: "security-compliance",
      category: "Technology"
    },
    {
      title: "Procurement Automation Guide",
      excerpt: "Best practices for implementing AI Workers in procurement and vendor management workflows.",
      date: "February 15, 2024",
      slug: "procurement-guide",
      category: "Guides"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 pt-40">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h1 className="text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-muted-foreground">
              Insights, updates, and stories from the gen.work team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post, i) => (
              <Link key={i} to={`/blog/${post.slug}`}>
                <Card className="p-6 bg-secondary border-border hover:border-accent transition-all hover:card-glow h-full cursor-pointer">
                  <div className="text-xs text-accent font-semibold mb-3">{post.category}</div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="text-xs text-muted-foreground">{post.date}</div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
