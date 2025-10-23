import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Task {
  id: string;
  service: string;
  title: string;
  time: string;
  icon: string;
  color: string;
}

interface TaskStep {
  label: string;
  status: 'completed' | 'in_progress' | 'pending';
  tool?: string;
}

const tasks: Task[] = [
  {
    id: '1',
    service: 'ServiceNow',
    title: 'Hardware request',
    time: '10m ago',
    icon: '📦',
    color: 'gray',
  },
  {
    id: '2',
    service: 'Service Now',
    title: 'Teams access request',
    time: '20m ago',
    icon: '✅',
    color: 'green',
  },
  {
    id: '3',
    service: 'Slack',
    title: 'Password reset',
    time: '1h ago',
    icon: '💬',
    color: 'gray',
  },
  {
    id: '4',
    service: 'Jira Service',
    title: 'Zoom access request',
    time: '2m ago',
    icon: '📊',
    color: 'blue',
  },
];

const taskSteps: Record<string, TaskStep[]> = {
  '2': [
    { label: 'Getting user info', status: 'completed' },
    { label: 'Checking company policy', status: 'completed', tool: 'Notion' },
    { label: 'Checking department licenses', status: 'in_progress', tool: 'Google Sheets' },
  ],
};

const InteractiveTaskDashboard = () => {
  const [selectedTask, setSelectedTask] = useState(tasks[1].id);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const steps = taskSteps[selectedTask] || [];
    if (steps.length === 0) return;

    const interval = setInterval(() => {
      setActiveStepIndex((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        return 0;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [selectedTask]);

  const currentSteps = taskSteps[selectedTask] || [];

  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs tracking-wider text-gray-500 uppercase">AI. LEGAL · TRAVEL</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-normal mb-4 text-gray-300">
            AI Workers are true digital teammates - orchestrating multi-agent workflows, integrating across your enterprise, enforcing policies, and collaborating with{' '}
            <span className="text-white">humans on critical decisions.</span>
          </h2>
        </div>

        {/* Dashboard */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left Sidebar - Task List */}
            <div className="lg:col-span-2">
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">IT AI Worker</h3>
                      <p className="text-xs text-gray-500">IT Department</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Stats */}
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 bg-gray-800/50 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">Active</div>
                    <div className="text-lg font-semibold text-white">12</div>
                  </div>
                  <div className="flex-1 bg-gray-800/50 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">For approval</div>
                    <div className="text-lg font-semibold text-white">12</div>
                  </div>
                  <div className="flex-1 bg-gray-800/50 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">Completed</div>
                    <div className="text-lg font-semibold text-white">8</div>
                  </div>
                </div>

                {/* Task List */}
                <div className="space-y-2">
                  {tasks.map((task) => (
                    <motion.button
                      key={task.id}
                      onClick={() => setSelectedTask(task.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all ${
                        selectedTask === task.id
                          ? 'bg-gray-800 border border-gray-700'
                          : 'hover:bg-gray-800/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg ${
                          task.color === 'green' ? 'bg-green-500/20' :
                          task.color === 'blue' ? 'bg-blue-500/20' :
                          'bg-gray-700'
                        }`}>
                          {task.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-500 mb-1">{task.service}</div>
                          <div className="text-sm text-white font-medium truncate">{task.title}</div>
                        </div>
                        <div className="text-xs text-gray-500">{task.time}</div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Task Details */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTask}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8"
                >
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-400">ServiceNow: New Task Created</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      User is requesting access to Microsoft Teams
                    </h3>
                  </div>

                  {/* Steps */}
                  <div className="space-y-4">
                    {currentSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className={`flex items-center gap-4 p-4 rounded-xl ${
                          index <= activeStepIndex ? 'bg-gray-800/50' : 'bg-transparent'
                        }`}
                      >
                        {/* Status Icon */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          step.status === 'completed' ? 'bg-green-500/20' :
                          step.status === 'in_progress' ? 'bg-blue-500/20' :
                          'bg-gray-700'
                        }`}>
                          {step.status === 'completed' && (
                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                          {step.status === 'in_progress' && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          )}
                          {step.status === 'pending' && (
                            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                          )}
                        </div>

                        {/* Step Label */}
                        <div className="flex-1">
                          <div className="text-white font-medium">{step.label}</div>
                        </div>

                        {/* Tool Badge */}
                        {step.tool && index <= activeStepIndex && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex items-center gap-2 bg-gray-700 rounded-lg px-3 py-1.5"
                          >
                            <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                              <span className="text-xs">📊</span>
                            </div>
                            <span className="text-xs text-white font-medium">{step.tool}</span>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="mt-8 flex items-center gap-3 bg-gray-800/50 rounded-xl p-3">
                    <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </button>
                    <input
                      type="text"
                      placeholder="Send a message..."
                      className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
                    />
                    <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTaskDashboard;

