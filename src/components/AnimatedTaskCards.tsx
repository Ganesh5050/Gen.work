import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TaskCard {
  id: number;
  icon: string;
  service: string;
  title: string;
  code?: string;
  status?: 'new' | 'sensitive';
  actions?: Array<{ label: string; variant: 'approve' | 'default' }>;
  indicator?: 'green' | 'red';
}

const tasks: TaskCard[] = [
  {
    id: 1,
    icon: '📊',
    service: 'Jira Service',
    title: 'Zoom access request',
    code: 'RD-121',
    status: 'new',
    indicator: 'green',
  },
  {
    id: 2,
    icon: '🔐',
    service: 'ServiceNow',
    title: 'Access request for Microsoft Teams',
    code: 'SCTASK#5432445',
    status: 'sensitive',
    actions: [{ label: 'Assign Teams license to user?', variant: 'approve' }],
    indicator: 'red',
  },
];

const AnimatedTaskCards = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [showTask, setShowTask] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTask(true);
      
      setTimeout(() => {
        setShowTask(false);
        setTimeout(() => {
          setCurrentTaskIndex((prev) => (prev + 1) % tasks.length);
        }, 500);
      }, 4000);
    }, 5000);

    // Show first task immediately
    setShowTask(true);

    return () => clearInterval(interval);
  }, []);

  const currentTask = tasks[currentTaskIndex];

  return (
    <div className="relative h-[400px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {showTask && (
          <motion.div
            key={currentTask.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative"
          >
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 min-w-[500px] shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  {currentTask.status === 'new' && (
                    <span className="text-sm font-medium text-white">New task resolved</span>
                  )}
                  {currentTask.status === 'sensitive' && (
                    <>
                      <span className="text-xs text-gray-400">{currentTask.code}</span>
                    </>
                  )}
                </div>
                {currentTask.indicator && (
                  <div className={`w-2 h-2 rounded-full ${currentTask.indicator === 'green' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
                )}
              </div>

              {/* Task Content */}
              <div className="bg-[#252525] rounded-xl p-4 mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-xl">
                    {currentTask.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-1">{currentTask.service}</div>
                    <div className="text-white font-medium">{currentTask.title}</div>
                  </div>
                  {currentTask.code && currentTask.status === 'new' && (
                    <div className="text-xs text-gray-500">{currentTask.code}</div>
                  )}
                </div>
              </div>

              {/* Sensitive Actions */}
              {currentTask.status === 'sensitive' && (
                <div>
                  <div className="text-sm text-white mb-3">Sensitive actions</div>
                  {currentTask.actions?.map((action, idx) => (
                    <div key={idx} className="bg-[#252525] rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                          </svg>
                        </div>
                        <span className="text-sm text-white">{action.label}</span>
                      </div>
                      <button className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                        Approve
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTaskCards;

