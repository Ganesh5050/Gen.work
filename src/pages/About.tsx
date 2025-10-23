import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 pt-40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <h1 className="text-5xl font-bold mb-8">About gen.work</h1>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're building the future of enterprise operations with autonomous AI Workers that seamlessly integrate into your existing workflows.
              </p>

              <div className="my-12 p-8 bg-secondary rounded-xl border border-border">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  To transform the chaos behind internal service workflows into self-driving operations so organizations can focus on growth, instead of what's slowing them down.
                </p>
                <p className="text-lg text-muted-foreground mt-4">
                  We empower every enterprise with intelligent, autonomous AI Workers that handle routine operations, enforce policies, and collaborate with humans on critical decisions—freeing your team to focus on strategic, high-value work.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-4 mt-12">Why gen.work?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Traditional automation falls short in handling complex, multi-step processes that require judgment, context, and integration across multiple systems. AI Workers go beyond simple task automation to become true digital teammates.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                {[
                  { number: "10M", label: "Seed Funding" },
                  { number: "50+", label: "Enterprise Clients" },
                  { number: "99%", label: "Uptime SLA" }
                ].map((stat, i) => (
                  <div key={i} className="text-center p-6 bg-secondary rounded-xl border border-border">
                    <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're a team of AI researchers, enterprise software veterans, and automation experts dedicated to transforming how organizations operate. Our diverse backgrounds in machine learning, distributed systems, and enterprise software ensure we build solutions that are both cutting-edge and production-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
