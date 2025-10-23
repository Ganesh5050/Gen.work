import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 pt-40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Enterprise-Grade AI Workers
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Policy-aware, autonomous agents that orchestrate workflows, integrate across your stack, and collaborate with your team.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-accent mb-4">CORE CAPABILITIES</h2>
            <h3 className="text-4xl font-bold mb-6">
              Built for enterprise operations from day one
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Pre-trained Agents */}
            <Card className="p-8 bg-background border-border hover:border-accent transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Pre-Trained for Enterprise</h3>
              <p className="text-muted-foreground mb-6">
                AI Workers come ready with knowledge of typical enterprise processes—new hire onboarding, vendor management, purchase approvals, access requests—so you don't start from scratch.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm">100+ pre-built workflows for common enterprise tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm">Industry best practices baked in</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm">Customizable to your specific processes</span>
                </li>
              </ul>
            </Card>

            {/* Workflow Orchestration */}
            <Card className="p-8 bg-background border-border hover:border-accent transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Multi-Agent Workflow Orchestration</h3>
              <p className="text-muted-foreground mb-6">
                Coordinate complex, multi-step processes across departments and systems. AI Workers communicate, delegate, and collaborate to get work done.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm">Parallel task execution and delegation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm">Automatic retry and error handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm">Real-time status tracking and notifications</span>
                </li>
              </ul>
            </Card>

            {/* Policy Awareness */}
            <Card className="p-8 bg-background border-border hover:border-accent transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Policy-Aware & Compliant</h3>
              <p className="text-muted-foreground mb-6">
                Built-in policy enforcement ensures every action respects your organization's rules, security requirements, and compliance mandates.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm">Configurable approval workflows and escalations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm">Audit trails for every decision and action</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm">SOC 2, GDPR, HIPAA compliance support</span>
                </li>
              </ul>
            </Card>

            {/* Platform-Agnostic */}
            <Card className="p-8 bg-background border-border hover:border-accent transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Platform-Agnostic Integration</h3>
              <p className="text-muted-foreground mb-6">
                Connect to your existing tools without writing code. AI Workers integrate with Slack, Jira, ServiceNow, Google Workspace, and hundreds more.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm">200+ pre-built integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm">No-code configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm">Custom API connectors available</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Autonomy + Human-in-Loop */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-sm font-semibold text-accent mb-4">AUTONOMY + HUMAN-IN-LOOP</h2>
                <h3 className="text-4xl font-bold mb-6">
                  Automation with intelligence
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  AI Workers handle routine tasks autonomously while knowing when to involve humans for critical decisions, approvals, or edge cases.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Autonomous Execution</h4>
                      <p className="text-sm text-muted-foreground">
                        Handle 80% of requests end-to-end without human intervention
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Smart Escalation</h4>
                      <p className="text-sm text-muted-foreground">
                        Know when to ask for help, approval, or human judgment
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Continuous Learning</h4>
                      <p className="text-sm text-muted-foreground">
                        Learn from human decisions to improve over time
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-8 bg-secondary border-border">
                <h4 className="font-bold text-lg mb-4">Example: IT Access Request</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-background rounded-lg">
                    <div className="text-sm font-semibold mb-1">Step 1: Automated</div>
                    <div className="text-xs text-muted-foreground">
                      AI Worker receives Slack request for GitHub access
                    </div>
                  </div>
                  <div className="p-3 bg-background rounded-lg">
                    <div className="text-sm font-semibold mb-1">Step 2: Automated</div>
                    <div className="text-xs text-muted-foreground">
                      Checks user's role against access policy
                    </div>
                  </div>
                  <div className="p-3 bg-background rounded-lg border border-accent">
                    <div className="text-sm font-semibold mb-1 text-accent">Step 3: Human Review</div>
                    <div className="text-xs text-muted-foreground">
                      Escalates to manager for approval (sensitive repo)
                    </div>
                  </div>
                  <div className="p-3 bg-background rounded-lg">
                    <div className="text-sm font-semibold mb-1">Step 4: Automated</div>
                    <div className="text-xs text-muted-foreground">
                      Provisions access, updates systems, notifies user
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-sm font-semibold text-accent mb-4">SECURITY & COMPLIANCE</h2>
            <h3 className="text-4xl font-bold mb-6">
              Enterprise-grade security built-in
            </h3>
            <p className="text-lg text-muted-foreground">
              We take security and compliance seriously so you can trust AI Workers with your most critical operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-background border-border text-center">
              <div className="flex justify-center mb-3">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Data Encryption</h4>
              <p className="text-sm text-muted-foreground">
                End-to-end encryption in transit and at rest
              </p>
            </Card>
            
            <Card className="p-6 bg-background border-border text-center">
              <div className="flex justify-center mb-3">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Compliance</h4>
              <p className="text-sm text-muted-foreground">
                SOC 2 Type II, GDPR, HIPAA ready
              </p>
            </Card>
            
            <Card className="p-6 bg-background border-border text-center">
              <div className="flex justify-center mb-3">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Audit Logging</h4>
              <p className="text-sm text-muted-foreground">
                Complete audit trails for every action
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to see gen.work AI Workers in action?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how AI Workers can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-demo">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Book a Demo
              </Button>
            </Link>
            <Link to="/solutions">
              <Button variant="outline" size="lg" className="border-muted-foreground hover:bg-muted">
                Explore Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;

