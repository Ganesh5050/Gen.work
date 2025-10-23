import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 pt-40">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <div className="text-sm text-accent font-semibold mb-4">COMPANY NEWS</div>
              <h1 className="text-5xl font-bold mb-6">Announcing $10M Seed Round</h1>
              <div className="text-muted-foreground mb-8">March 15, 2024</div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're thrilled to announce that AI Work has raised $10M in seed funding to accelerate the development of autonomous AI Workers for enterprise operations.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                This funding will enable us to expand our team, enhance our AI capabilities, and bring our vision of intelligent, autonomous enterprise operations to more organizations worldwide.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4">Why Now?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The enterprise landscape is rapidly evolving. Organizations are seeking ways to automate complex, multi-step processes that require judgment, context, and integration across multiple systems. Traditional automation tools fall short in these scenarios.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4">What's Next?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With this funding, we'll be doubling down on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Expanding our AI Worker capabilities across more departments</li>
                <li>Enhancing our multi-agent orchestration platform</li>
                <li>Building deeper integrations with enterprise tools</li>
                <li>Growing our team of AI researchers and engineers</li>
              </ul>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                We're incredibly grateful for the support of our investors and customers who believe in our mission to transform enterprise operations with AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
