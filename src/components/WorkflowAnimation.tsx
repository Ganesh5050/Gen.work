import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface WorkflowStep {
  id: string;
  label: string;
  icon: string;
  color: string;
  position: { x: number; y: number };
}

const steps: WorkflowStep[] = [
  { id: 'request', label: 'Access requested', icon: '🔵', color: 'blue', position: { x: 50, y: 20 } },
  { id: 'granted', label: 'Access granted', icon: '✅', color: 'green', position: { x: 10, y: 50 } },
  { id: 'requirements', label: 'Requirements checked', icon: '⚠️', color: 'orange', position: { x: 50, y: 80 } },
];

const WorkflowAnimation = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Central Asterisk */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path
            d="M40 10 L40 70 M10 40 L70 40 M20 20 L60 60 M60 20 L20 60"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Workflow Steps */}
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          className="absolute"
          style={{
            left: `${step.position.x}%`,
            top: `${step.position.y}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: activeStep === index ? 1.2 : 1,
            opacity: 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            {/* Dot with pulse */}
            <motion.div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                step.color === 'green' ? 'bg-green-500/20' :
                step.color === 'blue' ? 'bg-blue-500/20' :
                'bg-orange-500/20'
              }`}
              animate={{
                boxShadow: activeStep === index
                  ? `0 0 20px ${
                      step.color === 'green' ? 'rgba(34, 197, 94, 0.5)' :
                      step.color === 'blue' ? 'rgba(59, 130, 246, 0.5)' :
                      'rgba(249, 115, 22, 0.5)'
                    }`
                  : 'none',
              }}
            >
              {step.icon}
            </motion.div>

            {/* Label */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap">
              <span className="text-xs text-white font-medium">{step.label}</span>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Connecting lines (optional) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
        <motion.circle
          cx="50%"
          cy="50%"
          r="80"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

export default WorkflowAnimation;

