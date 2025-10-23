import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import WorkflowAnimation from "@/components/WorkflowAnimation";
import { motion } from "framer-motion";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Solutions"
        description="AI Workers tailored for IT, HR, Procurement, Legal, and Finance teams. Automate workflows, reduce costs, and scale operations with department-specific AI agents."
        keywords="IT automation, HR automation, procurement solutions, legal AI, finance automation, department AI workers"
        canonicalUrl="/solutions"
      />
      <Navigation />
      
      {/* Hero Section - IT Solutions */}
      <section className="relative overflow-hidden pt-40 pb-20 bg-black text-white" id="it">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-400 mb-4 tracking-wider uppercase">gen.it - YOUR NEW AI IT</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Your New AI IT<br />
              Service Desk Expert
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Handles access provisioning, asset management, ITSM, and automates tickets autonomously. Daily.
            </p>
            <Link to="/request-access">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-medium px-8 py-6 text-lg rounded-md">
                Request Access
              </Button>
            </Link>
          </div>

          {/* Dashboard Preview Image Placeholder */}
          <div className="mt-16 relative">
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-8 shadow-2xl">
              <div className="aspect-video bg-gray-800/50 rounded flex items-center justify-center">
                <p className="text-gray-600 text-sm">IT Service Desk Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-black text-white border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Fits your IT tech stack</h2>
            <p className="text-gray-400 mb-12 text-lg">
              Works supporting:<br />
              all, we integrate to Slack, Google Apps, Google Admin,<br />
              Workday, Jira, ServiceNow, Microsoft Intune, Salesforce, Docusign,<br />
              Microsoft 365, and more...
            </p>

            {/* Integration Icons Grid */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-16">
              {['Jira', 'Slack', 'Google', 'Zoom', 'Notion', 'GitHub', 'Asana', 'Monday', 'Okta', 'AWS', 'Azure', 'Stripe'].map((tool) => (
                <div key={tool} className="flex items-center justify-center p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-green-500/50 transition-all">
                  <span className="text-gray-400 text-sm font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-20 bg-black text-white border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 max-w-6xl mx-auto">
            <div className="text-left p-8 border-r border-gray-800 border-b md:border-b-0">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Automate Service<br />Resolutions By</p>
              <div className="text-6xl font-bold text-white mb-1">65%</div>
            </div>
            <div className="text-left p-8 border-r border-gray-800 md:border-r border-b md:border-b-0">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Scale Operational<br />Efficiency By</p>
              <div className="text-6xl font-bold text-white mb-1">10x</div>
            </div>
            <div className="text-left p-8 border-r border-gray-800">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Reduce Operational<br />Cost By</p>
              <div className="text-6xl font-bold text-white mb-1">50%</div>
            </div>
            <div className="text-left p-8">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Service Resolution<br />Across Departments</p>
              <div className="text-6xl font-bold text-white mb-1">24/7</div>
            </div>
          </div>
        </div>
      </section>

      {/* "AI that works" Section - with workflow animation */}
      <section className="py-20 bg-black text-white border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">AI that works.</h2>
          </div>

          {/* 01 - Autonomously picks up tasks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 max-w-6xl mx-auto items-center">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-800">
                <span className="text-gray-600 text-sm">01</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Autonomously picks up tasks across IT systems.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                AI Workers monitor Slack, Jira, ServiceNow, emails, forms and apps to catch every incoming IT task—helpdesk tickets, access requests, hardware requests and tech support. They parse natural language, categorize issues, and begin work instantly without human intervention.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-0.5">✓</span>
                  <p className="text-gray-300">Understands context, policies, and business logic.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-0.5">✓</span>
                  <p className="text-gray-300">Communicates natively through Slack, email, or Teams — just like any teammate would.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-8">
                <div className="mb-6">
                  <h4 className="text-sm text-gray-500 mb-2">Automated Monitoring</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-medium">Incoming Task</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {['New ticket created', 'Hardware request', 'Access request'].map((item, i) => (
                    <motion.div
                      key={i}
                      className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-300">{item}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 02 - Orchestrates complex workflows */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 max-w-6xl mx-auto items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-900/30 rounded-2xl border border-gray-800 p-8">
                <WorkflowAnimation />
                
                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                      <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                    </div>
                    <p className="text-xs text-gray-500">Multi-System Execution</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2l2.5 5 5.5.8-4 3.9.9 5.5-5-2.6-5 2.6.9-5.5-4-3.9 5.5-.8z"/></svg>
                    </div>
                    <p className="text-xs text-gray-500">AI Knowledge & Policy Checks</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><rect x="4" y="4" width="12" height="12" rx="2"/></svg>
                    </div>
                    <p className="text-xs text-gray-500">Task Completed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-800">
                <span className="text-gray-600 text-sm">02</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Orchestrates complex, agentic workflows across systems.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Combines knowledge, policy checks, and takes action to deliver complete, compliant outcomes.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-0.5">✓</span>
                  <p className="text-gray-300">Operates securely behind the scenes.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-0.5">✓</span>
                  <p className="text-gray-300">Works with and learns from human IT teammates.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 03 - Up and running in days */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-800">
                <span className="text-gray-600 text-sm">03</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Up and running in days.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Ready for work with pre-built, pre-skilled AI workers, or create your own with a natural language workflow assistant.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-0.5">✓</span>
                  <p className="text-gray-300">Define and modify AI Agents using structured natural language.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-0.5">✓</span>
                  <p className="text-gray-300">Intuitive and natural language interface for any business user.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-6">
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <span className="text-green-500 text-lg">✓</span>
                      </div>
                      <span className="text-sm font-medium text-white">Customer Reviewer</span>
                    </div>
                    <p className="text-xs text-gray-400 ml-11">User is requesting access to Microsoft Teams</p>
                  </div>

                  <div className="space-y-2 ml-11">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-gray-700 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-gray-400 text-xs">1</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 mb-1">Description</div>
                        <div className="text-sm text-gray-300">Getting user info</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-gray-700 rounded"></div>
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-gray-700 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-gray-400 text-xs">2</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 mb-1">Legal</div>
                        <div className="text-sm text-gray-300">Checking company policy</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-blue-500 rounded animate-pulse"></div>
                        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="2"/></svg>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-gray-700 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-gray-400 text-xs">3</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 mb-1">Capabilities</div>
                        <div className="text-sm text-gray-300">Checking department licenses</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-gray-800 rounded"></div>
                        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="2"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-end execution Section */}
      <section className="py-32 bg-black text-white border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              End-to-end execution.<br />
              On autopilot.
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              AI Workers operate autonomously across any workflow and system to identify and take on tasks. Then start to finish—resolving workflow and 24x7 and safely on your behalf.
            </p>
          </div>

          {/* Workflow Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Access Requests & Provisioning */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-green-500/50 transition-all">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                </div>
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                </div>
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Access Requests & Provisioning</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The AI Worker picks up the access request, checks policies, escalates for approval if needed, provisions access in tools such as Okta or Microsoft 365.
              </p>
            </div>

            {/* Employee Onboarding */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-green-500/50 transition-all" id="hr">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                </div>
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                </div>
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Employee Onboarding</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The AI Worker can create user accounts, assign tools, set permissions, and send a welcome confirmation—completing a full onboarding workflow in minutes.
              </p>
            </div>

            {/* Employee Offboarding */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-green-500/50 transition-all">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                </div>
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                </div>
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Employee Offboarding</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Once offboarding is triggered, the AI Worker will revoke access, deactivate accounts, and log all these actions—without delays or follow-ups.
              </p>
            </div>

            {/* Ticket Triage & Resolution */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-green-500/50 transition-all">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                </div>
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                </div>
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Ticket Triage & Resolution</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The AI Worker reads incoming tickets, resolves common issues instantly, and escalates only the ones that truly need a human.
              </p>
            </div>

            {/* Internal Approvals */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-green-500/50 transition-all">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Internal Approvals</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The AI Worker collects request details, routes for approval as soon as it's approved—without delays or follow-ups.
              </p>
            </div>

            {/* Group & Role Management */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-green-500/50 transition-all">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                </div>
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                </div>
                <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Group & Role Management</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Dynamic group assignments and role-based access control automated across your entire organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fits your IT tech stack - bottom section */}
      <section className="py-32 bg-black text-white border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Text */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Fits your IT tech stack
                </h2>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  Now Supporting:
                </p>
                <p className="text-base text-gray-500 leading-relaxed">
                  Jira, ServiceNow, Okta, Google Docs, Google Drive,<br />
                  Google Workspace, Slack, Microsoft Teams, Salesforce, Docusign,<br />
                  Microsoft 365, and more...
                </p>
              </div>

              {/* Right: Integration Icons Grid */}
              <div className="grid grid-cols-4 gap-6">
                {[
                  { name: 'Google Drive', color: 'bg-blue-500/10' },
                  { name: 'GitHub', color: 'bg-gray-500/10' },
                  { name: 'Jira', color: 'bg-blue-600/10' },
                  { name: 'Zoom', color: 'bg-blue-400/10' },
                  { name: 'Google Docs', color: 'bg-blue-500/10' },
                  { name: 'Slack', color: 'bg-purple-500/10' },
                  { name: 'Teams', color: 'bg-purple-600/10' },
                  { name: 'Jira', color: 'bg-blue-600/10' },
                  { name: 'ServiceNow', color: 'bg-teal-500/10' },
                  { name: 'Okta', color: 'bg-blue-700/10' },
                  { name: 'Microsoft', color: 'bg-green-500/10' },
                  { name: 'Notion', color: 'bg-gray-800/10' },
                ].map((integration, i) => (
                  <div
                    key={i}
                    className={`aspect-square ${integration.color} rounded-xl border border-gray-800 flex items-center justify-center hover:border-green-500/50 transition-all group`}
                  >
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-all">
                      <span className="text-xs text-gray-400 font-medium">{integration.name.slice(0, 1)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department-specific sections */}
      <section className="pb-32 bg-black text-white border-t border-gray-900">
        <div className="container mx-auto px-6 pt-32">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Solutions for every department
            </h2>
            <p className="text-lg text-gray-400">
              Pre-configured AI Workers for your specific operational needs
            </p>
          </div>
          <div className="space-y-12 max-w-6xl mx-auto">
            {[
              {
                title: "HR Management",
                id: "hr",
                icon: "HR",
                description: "Streamline employee lifecycle from onboarding to offboarding.",
                workflows: [
                  "New Hire Onboarding Automation",
                  "Benefits Enrollment & Management",
                  "Leave Request Processing",
                  "Performance Review Coordination",
                  "Training & Development Tracking",
                  "Policy Q&A Assistant"
                ],
                roi: "Cut onboarding time from 2 weeks to 2 days, 90% reduction in manual admin work",
                color: "border-green-500/30"
              },
              {
                title: "Procurement",
                id: "procurement",
                icon: "PR",
                description: "Optimize purchasing, vendor management, and contract handling.",
                workflows: [
                  "Vendor Onboarding & Verification",
                  "Purchase Request Automation",
                  "Invoice Processing & Reconciliation",
                  "Contract Lifecycle Management",
                  "Spend Analysis & Budget Control",
                  "Supplier Performance Monitoring"
                ],
                roi: "Accelerate procurement cycles by 60%, save $300K+ annually on process costs",
                color: "border-purple-500/30"
              },
              {
                title: "Legal Operations",
                id: "legal",
                icon: "LG",
                description: "Manage contracts, compliance, and legal documentation efficiently.",
                workflows: [
                  "Contract Review & Analysis",
                  "Compliance Monitoring & Alerts",
                  "Legal Document Management",
                  "Risk Assessment Automation",
                  "Policy Update Distribution",
                  "Legal Request Triage"
                ],
                roi: "Reduce contract review time by 80%, ensure 100% compliance tracking",
                color: "border-red-500/30"
              },
              {
                title: "Finance",
                id: "finance",
                icon: "FN",
                description: "Automate invoicing, reconciliation, and financial reporting.",
                workflows: [
                  "Invoice Processing & Approval",
                  "Expense Report Management",
                  "Budget Tracking & Alerts",
                  "Financial Reporting Automation",
                  "Audit Trail & Documentation",
                  "Account Reconciliation"
                ],
                roi: "Process invoices 10x faster, reduce errors by 95%, save 30+ hours/week",
                color: "border-yellow-500/30"
              }
            ].map((solution, i) => (
              <div key={i} id={solution.id} className={`p-8 bg-gray-900 rounded-lg border ${solution.color} hover:border-green-500/50 transition-all`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center">
                        <span className="text-lg font-bold text-white">{solution.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                        <p className="text-gray-400 text-sm">{solution.description}</p>
                      </div>
                    </div>
                    
                    <h4 className="font-semibold mb-3 text-xs text-gray-500 uppercase tracking-wider">KEY WORKFLOWS</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {solution.workflows.map((workflow, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <span className="text-green-500 mt-0.5 text-sm">✓</span>
                          <span className="text-sm text-gray-300">{workflow}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-between">
                    <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <h4 className="font-semibold mb-2 text-xs text-gray-500 uppercase tracking-wider">ROI IMPACT</h4>
                      <p className="text-sm text-gray-300">{solution.roi}</p>
                    </div>
                    <Link to="/book-demo" className="mt-4">
                      <Button variant="outline" className="w-full bg-transparent border-gray-700 text-white hover:bg-gray-800 hover:border-green-500">
                        See Demo
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
