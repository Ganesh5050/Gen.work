import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const TaskDashboard = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'approval' | 'completed'>('active');

  const tasks = {
    active: [
      { id: 1, title: 'Hardware request', source: 'ServiceNow', time: '10m ago', icon: '🔧' },
      { id: 2, title: 'Teams access request', source: 'Service Now', time: '20m ago', icon: '👥' },
      { id: 3, title: 'Password reset', source: 'Slack', time: '1h ago', icon: '🔐' },
    ],
    approval: [
      { id: 4, title: 'Zoom access request', source: 'Jira Service', time: '2m ago', icon: '📹' },
      { id: 5, title: 'Microsoft Teams license', source: 'ServiceNow', time: '15m ago', icon: '💼' },
    ],
    completed: [
      { id: 6, title: 'New hire onboarding', source: 'ServiceNow', time: '2h ago', icon: '✅' },
      { id: 7, title: 'Equipment provision', source: 'Jira', time: '3h ago', icon: '📦' },
    ],
  };

  return (
    <Card className="bg-gray-900 border-gray-800 text-white max-w-2xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold">IT AI Worker</h3>
            <p className="text-sm text-gray-400">IT Department</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('active')}
            className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'active'
                ? 'bg-gray-800 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            Active
            <Badge className="ml-2 bg-green-500/20 text-green-400 border-green-500/30">
              12
            </Badge>
          </button>
          <button
            onClick={() => setActiveTab('approval')}
            className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'approval'
                ? 'bg-gray-800 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            For approval
            <Badge className="ml-2 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
              12
            </Badge>
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'completed'
                ? 'bg-gray-800 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            Completed
            <Badge className="ml-2 bg-blue-500/20 text-blue-400 border-blue-500/30">
              12
            </Badge>
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="p-6 space-y-3 min-h-[300px]">
        {tasks[activeTab].map((task, index) => (
          <div
            key={task.id}
            className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-lg">
              {task.icon}
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-sm">{task.title}</h4>
              <p className="text-xs text-gray-400">{task.source}</p>
            </div>
            <span className="text-xs text-gray-500">{task.time}</span>
          </div>
        ))}
      </div>

      {/* New Task Notification (animated) */}
      <div className="px-6 pb-6">
        <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg animate-pulse">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-green-400 font-medium">ServiceNow</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">New Task Created</p>
          <p className="text-xs text-gray-500 mt-1">Getting task #6455234 details...</p>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-6 pt-0">
        <div className="flex items-center gap-2 p-3 bg-gray-800 rounded-lg">
          <input
            type="text"
            placeholder="Send a message..."
            className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
          />
          <button className="text-green-500 hover:text-green-400">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 10L2 2L5 10L2 18L18 10Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default TaskDashboard;

