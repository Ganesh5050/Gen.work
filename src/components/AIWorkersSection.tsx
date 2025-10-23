import { useState } from 'react';
import { motion } from 'framer-motion';

interface AIWorker {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  skills: string[];
  apps: string[];
}

const workers: AIWorker[] = [
  {
    id: 'it',
    title: 'IT',
    subtitle: 'AI Worker',
    icon: '💻',
    skills: [
      'Onboarding/Offboarding',
      'Identity and Access',
      'Account unlock and password',
    ],
    apps: ['Slack', 'Google', 'Zoom', 'Okta', 'Jira', 'GitHub', 'AWS', 'Azure'],
  },
  {
    id: 'procurement',
    title: 'Procurement',
    subtitle: 'AI Worker',
    icon: '📦',
    skills: [
      'Vendor onboarding',
      'Purchase request',
      'PO tracking',
      'Supplier finder',
    ],
    apps: ['Slack', 'SAP', 'Oracle', 'Coupa', 'Jira', 'Salesforce', 'NetSuite'],
  },
  {
    id: 'office-ops',
    title: 'Office Ops',
    subtitle: 'AI Worker',
    icon: '🏢',
    skills: [
      'Parental leave',
      'Onboarding new employee',
      'Gift package',
      'Office parking',
    ],
    apps: ['Slack', 'Google', 'Notion', 'Airtable', 'Asana', 'Monday'],
  },
  {
    id: 'hr',
    title: 'HR',
    subtitle: 'AI Worker',
    icon: '👥',
    skills: [
      'Employee onboarding',
      'HR policy and benefits',
      'Time off & leave',
    ],
    apps: ['Workday', 'BambooHR', 'ADP', 'Gusto', 'Slack', 'Jira', 'Zenefits'],
  },
  {
    id: 'legal',
    title: 'Legal',
    subtitle: 'AI Worker',
    icon: '⚖️',
    skills: [
      'Legal policy assistant',
      'NDA review',
      'DPA review',
      'MSA review',
    ],
    apps: ['DocuSign', 'Adobe Sign', 'Slack', 'Salesforce', 'NetSuite', 'Ironclad'],
  },
];

const AIWorkersSection = () => {
  const [expandedWorker, setExpandedWorker] = useState<string | null>(null);

  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="inline-block mb-4">
              <span className="text-xs tracking-wider text-gray-500 uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                AI WORKERS
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Department-level super-agents, ready for work.
            </h2>
          </div>
          <div className="text-gray-400 max-w-md">
            <p>
              Ready to work with pre-trained enterprise skills, AI Workers are platform agnostic and customizable to your specific processes, policies, and tools without complex configuration.
            </p>
          </div>
        </div>

        {/* AI Workers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {workers.map((worker, index) => (
            <motion.div
              key={worker.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all group"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {worker.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{worker.title}</h3>
                    <p className="text-xs text-gray-500">{worker.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">AI SKILLS</span>
                  <button
                    onClick={() => setExpandedWorker(expandedWorker === worker.id ? null : worker.id)}
                    className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-gray-400 text-sm">+</span>
                  </button>
                </div>
                <div className="space-y-2">
                  {worker.skills.slice(0, expandedWorker === worker.id ? undefined : 3).map((skill, idx) => (
                    <div
                      key={idx}
                      className="text-sm text-gray-400 bg-gray-800/30 rounded-lg px-3 py-2"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Apps Section */}
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wider mb-3 block">APPS</span>
                <div className="flex flex-wrap gap-2">
                  {worker.apps.slice(0, 8).map((app, idx) => (
                    <div
                      key={idx}
                      className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors"
                      title={app}
                    >
                      <span className="text-xs text-gray-400">{app.slice(0, 2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIWorkersSection;

