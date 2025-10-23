import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TaskDashboard from "@/components/TaskDashboard";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import SEO from "@/components/SEO";
import AnimatedTaskCards from "@/components/AnimatedTaskCards";
import AIWorkersSection from "@/components/AIWorkersSection";
import InteractiveTaskDashboard from "@/components/InteractiveTaskDashboard";
import FloatingBackground from "@/components/FloatingBackground";

const Home = () => {
  const departments = ["travel", "it-support", "office-ops", "facilities", "dev-ops"];

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingBackground />
      <SEO 
        title="gen.work - The Next Gen AI Workforce"
        description="Autonomous AI Workers designed for internal operations teams - IT, HR, Procurement, Legal and beyond. Automate 65% of service resolutions, scale 10x, reduce costs 50%."
        keywords="AI workers, AI agents, enterprise automation, IT automation, HR automation, procurement automation, autonomous AI, gen.work"
        canonicalUrl="/"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                The Next Gen <br />
                <span className="text-gradient">AI Workforce</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Autonomous AI Workers designed for internal operations teams - IT, HR, Procurement, Legal and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-demo">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-muted-foreground hover:bg-muted">
                    Book a demo
                  </Button>
                </Link>
                <Link to="/request-access">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-white/90">
                    Request Access
                  </Button>
                </Link>
              </div>
            </div>

            {/* Large X Logo */}
            <div className="flex items-center justify-center animate-float">
              <svg width="400" height="400" viewBox="0 0 400 400" fill="none" className="opacity-20">
                <path d="M100 100L300 300M300 100L100 300" stroke="currentColor" strokeWidth="40" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Scrolling Department Labels */}
        <div className="mt-20 overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...departments, ...departments, ...departments].map((dept, i) => (
              <div
                key={i}
                className="inline-flex items-center mx-8 text-2xl font-medium text-muted-foreground"
              >
                gen.<span className="text-accent">{dept}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* AI.WORK ANIMATED SECTIONS START HERE */}
      {/* ========================================= */}

      {/* Animated Master of Agents Section */}
      <section className="relative pt-32 pb-32 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div>
              <div className="space-y-16">
                {/* Section 1 */}
                <div className="border-b border-gray-800 pb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    Autonomously picks up tasks.
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    AI Workers are always on to identify tasks and get them done.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="border-b border-gray-800 pb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    Orchestrates multiple AI agents.
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    Combines knowledge, policy checks, and takes action to deliver complete, compliant outcomes.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Involves humans when needed.
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    Completes the task autonomously, logging every step along the way - but keeps you in the loop when an escalation is needed.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Animated Task Cards */}
            <div className="relative">
              <AnimatedTaskCards />
            </div>
          </div>
        </div>
      </section>

      {/* AI Workers Cards Section */}
      <AIWorkersSection />

      {/* Interactive Task Dashboard */}
      <InteractiveTaskDashboard />

      {/* ========================================= */}
      {/* AI.WORK ANIMATED SECTIONS END HERE */}
      {/* ========================================= */}

      {/* Statistics Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {/* Stat 1 */}
            <div className="text-center animate-slide-up">
              <div className="mb-4">
                <span className="text-6xl md:text-7xl font-bold text-green-500">65%</span>
              </div>
              <p className="text-lg text-gray-300">
                Automate service resolutions by
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-4">
                <span className="text-6xl md:text-7xl font-bold text-green-500">10x</span>
              </div>
              <p className="text-lg text-gray-300">
                Scale operational efficiency by
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-4">
                <span className="text-6xl md:text-7xl font-bold text-green-500">50%</span>
              </div>
              <p className="text-lg text-gray-300">
                Reduce operational cost by
              </p>
            </div>

            {/* Stat 4 */}
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="mb-4">
                <span className="text-6xl md:text-7xl font-bold text-green-500">24/7</span>
              </div>
              <p className="text-lg text-gray-300">
                Service resolution across departments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is AI.work Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16 animate-slide-up">
            <h2 className="text-sm font-semibold text-accent mb-4 text-center">WHAT IS GEN.WORK</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              The World's First AI Worker Platform
            </h3>
            <p className="text-xl text-muted-foreground mb-8 text-center leading-relaxed">
              gen.work is the world's first AI Worker Platform with autonomous, policy-aware agents that automate and handle the busywork behind <span className="text-foreground font-semibold">IT, Procurement, HR, Legal, Deal Desk, Finance and Operations</span> teams.
            </p>
            
            {/* Value Props Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <Card className="p-6 bg-background border-border">
                <h4 className="font-bold text-lg mb-3">Pre-Trained for Enterprise</h4>
                <p className="text-muted-foreground text-sm">
                  AI Workers come pre-trained on typical enterprise processes—new hire onboarding, vendor onboarding, purchase requests, app access approval—so you don't start from scratch.
                </p>
              </Card>
              
              <Card className="p-6 bg-background border-border">
                <h4 className="font-bold text-lg mb-3">Platform-Agnostic Integration</h4>
                <p className="text-muted-foreground text-sm">
                  Works across different systems, tools, and workflows. Connect to your tools—Slack, Jira, ServiceNow, Google Workspace—no dev work required.
                </p>
              </Card>
              
              <Card className="p-6 bg-background border-border">
                <h4 className="font-bold text-lg mb-3">Policy-Aware & Compliant</h4>
                <p className="text-muted-foreground text-sm">
                  Agents are designed to respect enterprise policies, help with governance, and reduce manual risk. Built-in compliance and security from day one.
                </p>
              </Card>
              
              <Card className="p-6 bg-background border-border">
                <h4 className="font-bold text-lg mb-3">Autonomy + Human-in-Loop</h4>
                <p className="text-muted-foreground text-sm">
                  While AI Workers automate routine tasks, they support humans in critical decisions and are extensible/customizable to your specific needs.
                </p>
              </Card>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              AI Workers are true digital teammates
            </h2>
            <p className="text-lg text-muted-foreground">
              Orchestrating multi-agent workflows, integrating across your enterprise, enforcing policies, and collaborating with humans on critical decisions.
            </p>
          </div>

          {/* Task Dashboard */}
          <TaskDashboard />
                  </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-semibold text-accent mb-4 text-center">WHY THIS MATTERS</h2>
            <h3 className="text-4xl font-bold mb-8 text-center">
              Transform chaos into self-driving operations
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2">Free Your Team</h4>
                <p className="text-sm text-muted-foreground">
                  Internal business functions are high-volume but low-innovation. AI Workers free human labor for strategic work.
                </p>
                </div>
                
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2">Seamless Integration</h4>
                <p className="text-sm text-muted-foreground">
                  Integrating across multiple tools is costly. gen.work plugs in and automates workflows without complex development.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                    </div>
                <h4 className="font-bold text-lg mb-2">Enterprise-Grade</h4>
                <p className="text-sm text-muted-foreground">
                  As AI embeds in operations, policy-aware and enterprise-grade agents become the differentiator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integrations */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-sm font-semibold text-accent mb-4">INTEGRATIONS</h2>
            <h3 className="text-4xl font-bold mb-6">
              Works with your existing tools
            </h3>
            <p className="text-lg text-muted-foreground">
              Platform-agnostic AI Workers orchestrate workflows across all your enterprise systems.
            </p>
            </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {["Slack", "Jira", "ServiceNow", "Google Workspace", "Microsoft Teams", "Salesforce", "SAP", "Workday", "Zendesk", "Asana", "Monday.com", "Notion"].map((tool, i) => (
              <div key={i} className="flex items-center justify-center p-6 bg-background rounded-lg border border-border hover:border-accent transition-all">
                <span className="font-semibold text-sm">{tool}</span>
              </div>
            ))}
            </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-accent mb-4">TESTIMONIALS</h2>
            <h3 className="text-4xl font-bold mb-6">
              Trusted by Operations Teams Worldwide
            </h3>
            <p className="text-lg text-muted-foreground">
              See how leading companies are transforming their operations with gen.work
            </p>
          </div>
          
          <TestimonialsSlider />
        </div>
      </section>

      {/* Agentic Hire CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your next hire<br />is agentic
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            See our AI Workers in action, book a demo now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-access">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Request Access
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Built for the security, compliance, and control that modern enterprises require.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center p-6 bg-secondary rounded-lg border border-border">
              <svg className="w-8 h-8 text-accent mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <div className="text-sm font-semibold">GDPR</div>
              <div className="text-xs text-muted-foreground">Compliant</div>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-secondary rounded-lg border border-border">
              <svg className="w-8 h-8 text-accent mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm font-semibold">SOC 2</div>
              <div className="text-xs text-muted-foreground">Compliant</div>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-secondary rounded-lg border border-border">
              <svg className="w-8 h-8 text-accent mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              <div className="text-sm font-semibold">Access</div>
              <div className="text-xs text-muted-foreground">Control</div>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-secondary rounded-lg border border-border">
              <svg className="w-8 h-8 text-accent mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <div className="text-sm font-semibold">Bring your own</div>
              <div className="text-xs text-muted-foreground">LLM</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
