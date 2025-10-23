import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';

const aiWorkers = [
  {
    name: 'IT Operations Assistant',
    department: 'IT',
    description: 'Automates employee onboarding/offboarding, access management, and ticket routing',
    capabilities: [
      'Provision user accounts across all systems',
      'Manage access rights and permissions',
      'Route support tickets intelligently',
      'Automate password resets',
      'Monitor system health and alerts',
    ],
    metrics: {
      efficiency: '85%',
      timeSaved: '120 hours/month',
      satisfaction: '4.8/5',
    },
    integrations: ['Okta', 'Active Directory', 'ServiceNow', 'Jira', 'Slack'],
  },
  {
    name: 'HR Onboarding Specialist',
    department: 'HR',
    description: 'Streamlines new hire onboarding, benefits enrollment, and employee queries',
    capabilities: [
      'Coordinate new hire paperwork',
      'Schedule orientation sessions',
      'Guide benefits selection',
      'Answer policy questions 24/7',
      'Track onboarding completion',
    ],
    metrics: {
      efficiency: '78%',
      timeSaved: '95 hours/month',
      satisfaction: '4.7/5',
    },
    integrations: ['Workday', 'BambooHR', 'ADP', 'Greenhouse', 'Slack'],
  },
  {
    name: 'Procurement Coordinator',
    department: 'Procurement',
    description: 'Handles purchase requests, vendor management, and approval workflows',
    capabilities: [
      'Process purchase requests',
      'Route approvals based on policy',
      'Manage vendor communications',
      'Track order status',
      'Generate spending reports',
    ],
    metrics: {
      efficiency: '82%',
      timeSaved: '110 hours/month',
      satisfaction: '4.6/5',
    },
    integrations: ['Coupa', 'SAP Ariba', 'Oracle', 'NetSuite', 'Slack'],
  },
  {
    name: 'Legal Compliance Monitor',
    department: 'Legal',
    description: 'Manages contract workflows, compliance tracking, and document review',
    capabilities: [
      'Route contracts for review',
      'Track approval deadlines',
      'Monitor compliance requirements',
      'Maintain document repository',
      'Generate audit reports',
    ],
    metrics: {
      efficiency: '76%',
      timeSaved: '88 hours/month',
      satisfaction: '4.9/5',
    },
    integrations: ['DocuSign', 'Ironclad', 'Conga', 'SharePoint', 'Slack'],
  },
  {
    name: 'Finance Ops Assistant',
    department: 'Finance',
    description: 'Automates invoice processing, expense approvals, and financial reporting',
    capabilities: [
      'Process invoices and receipts',
      'Route expense approvals',
      'Reconcile transactions',
      'Generate financial reports',
      'Monitor budget compliance',
    ],
    metrics: {
      efficiency: '80%',
      timeSaved: '105 hours/month',
      satisfaction: '4.7/5',
    },
    integrations: ['QuickBooks', 'Expensify', 'Concur', 'Bill.com', 'Slack'],
  },
  {
    name: 'Deal Desk Coordinator',
    department: 'Sales Ops',
    description: 'Streamlines quote generation, deal approvals, and contract execution',
    capabilities: [
      'Generate accurate quotes',
      'Route deals for approval',
      'Track contract status',
      'Coordinate with legal',
      'Update CRM automatically',
    ],
    metrics: {
      efficiency: '83%',
      timeSaved: '115 hours/month',
      satisfaction: '4.8/5',
    },
    integrations: ['Salesforce', 'HubSpot', 'CPQ', 'DocuSign', 'Slack'],
  },
];

export default function AIWorkers() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              AI Workers
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet your new digital workforce
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pre-trained AI Workers ready to automate workflows across IT, HR, Procurement,
              Legal, Finance, and Sales Operations. No coding required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {aiWorkers.map((worker) => (
              <Card
                key={worker.name}
                className="border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-white/5"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-white/10 text-white border-white/20">
                      {worker.department}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl">{worker.name}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {worker.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Key Capabilities</h4>
                    <ul className="space-y-2">
                      {worker.capabilities.slice(0, 4).map((capability) => (
                        <li key={capability} className="flex items-start gap-2 text-sm text-gray-300">
                          <svg
                            className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-800">
                    <h4 className="text-sm font-semibold text-white mb-3">Performance</h4>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-400">
                          {worker.metrics.efficiency}
                        </div>
                        <div className="text-xs text-gray-500">Efficiency</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-400">
                          {worker.metrics.timeSaved.split(' ')[0]}h
                        </div>
                        <div className="text-xs text-gray-500">Saved/mo</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-400">
                          {worker.metrics.satisfaction}
                        </div>
                        <div className="text-xs text-gray-500">Rating</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-800">
                    <h4 className="text-sm font-semibold text-white mb-2">Integrations</h4>
                    <div className="flex flex-wrap gap-2">
                      {worker.integrations.slice(0, 3).map((integration) => (
                        <Badge
                          key={integration}
                          className="bg-gray-800 text-gray-300 border-gray-700 text-xs"
                        >
                          {integration}
                        </Badge>
                      ))}
                      {worker.integrations.length > 3 && (
                        <Badge className="bg-gray-800 text-gray-400 border-gray-700 text-xs">
                          +{worker.integrations.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">How it works</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Deploy AI Workers in minutes, not months
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Choose Your Worker',
                  description: 'Select from pre-trained AI Workers or create custom ones',
                },
                {
                  step: '2',
                  title: 'Connect Tools',
                  description: 'Integrate with your existing systems in a few clicks',
                },
                {
                  step: '3',
                  title: 'Set Policies',
                  description: 'Define approval rules and workflows that match your processes',
                },
                {
                  step: '4',
                  title: 'Go Live',
                  description: 'Your AI Worker starts handling tasks immediately',
                },
              ].map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <Card className="border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Enterprise-Grade Security</CardTitle>
                <CardDescription className="text-gray-400">
                  Your data and workflows are protected at the highest level
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  'SOC 2 Type II certified',
                  'GDPR and HIPAA compliant',
                  'End-to-end encryption',
                  'Role-based access control',
                  'Comprehensive audit logs',
                  'Regular security assessments',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-gray-300">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Continuous Learning</CardTitle>
                <CardDescription className="text-gray-400">
                  AI Workers get smarter over time
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  'Learn from your feedback',
                  'Adapt to policy changes',
                  'Improve accuracy over time',
                  'Share learnings across workers',
                  'Regular model updates',
                  'Custom training available',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-gray-300">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    {feature}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to deploy your digital workforce?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              See how AI Workers can transform your operations. Schedule a personalized demo.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/book-demo">
                <Button className="bg-white text-black hover:bg-gray-200">
                  Schedule a Demo
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

