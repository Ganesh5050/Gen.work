import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

type WorkerType = 'IT' | 'Procurement' | 'Office Ops' | 'HR' | 'Legal';

const TabbedAIWorkers = () => {
  const [activeWorker, setActiveWorker] = useState<WorkerType>('IT');

  const workers = {
    IT: {
      title: 'IT AI Worker',
      skills: [
        'Onboarding/Offboarding',
        'Identity and Access',
        'Account unlock and password',
        'Software provisioning',
        'Knowledge Assistant',
        'IT helpdesk Q&A',
        'Hardware & Asset Manager',
      ],
      apps: ['Okta', 'Active Directory', 'ServiceNow', 'Jira', 'Slack'],
    },
    Procurement: {
      title: 'Procurement AI Worker',
      skills: [
        'Vendor onboarding',
        'Purchase request',
        'PO tracking',
        'Supplier finder',
        'Inventory & stock check',
        'Purchasing order',
      ],
      apps: ['SAP', 'Coupa', 'Ariba', 'NetSuite', 'Slack'],
    },
    'Office Ops': {
      title: 'Office Ops AI Worker',
      skills: [
        'Parental leave',
        'Onboarding new employee',
        'Gift package',
        'Office parking',
        'Office guest',
        'Office inventory and supply',
        'Team event',
        'Room booking',
        'Workspace and equipment',
        'Facilities Q&A',
      ],
      apps: ['Google Workspace', 'Slack', 'Robin', 'Envoy', 'Microsoft Teams'],
    },
    HR: {
      title: 'HR AI Worker',
      skills: [
        'Employee onboarding',
        'HR policy and benefits',
        'Time off & leave',
        'New hire acquisition',
        'Training & development',
        'HR Compliance & Case',
        'Employee Engagement',
      ],
      apps: ['Workday', 'BambooHR', 'ADP', 'Greenhouse', 'Slack'],
    },
    Legal: {
      title: 'Legal AI Worker',
      skills: [
        'Legal policy assistant',
        'NDA review',
        'DPA review',
        'MSA review',
        'Order form validation',
        'New vendor',
      ],
      apps: ['DocuSign', 'Ironclad', 'Salesforce', 'Google Drive', 'Slack'],
    },
  };

  const currentWorker = workers[activeWorker];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {(Object.keys(workers) as WorkerType[]).map((workerType) => (
          <button
            key={workerType}
            onClick={() => setActiveWorker(workerType)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeWorker === workerType
                ? 'bg-green-500 text-white shadow-lg shadow-green-500/50'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {workerType}
          </button>
        ))}
      </div>

      {/* Worker Content */}
      <Card className="bg-gray-900 border-gray-800 text-white p-8 animate-slide-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-2">{currentWorker.title}</h3>
            <p className="text-sm text-gray-400 mb-6">AI Worker</p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-green-400 mb-3">AI Skills</h4>
              <div className="space-y-2">
                {currentWorker.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-sm text-gray-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="text-green-500 mt-1">•</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Apps */}
          <div>
            <h4 className="text-sm font-semibold text-green-400 mb-4">Apps</h4>
            <div className="grid grid-cols-2 gap-3">
              {currentWorker.apps.map((app, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="justify-center py-3 text-sm bg-gray-800 border-gray-700 text-gray-300 hover:border-green-500 transition-colors animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {app}
                </Badge>
              ))}
            </div>

            {/* Visual Element */}
            <div className="mt-8 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400 text-lg">✓</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">Ready to deploy</div>
                  <div className="text-xs text-gray-400">Pre-trained & configured</div>
                </div>
              </div>
              <div className="text-xs text-gray-500">
                This AI Worker is production-ready and can be customized to your specific workflows and policies.
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TabbedAIWorkers;

