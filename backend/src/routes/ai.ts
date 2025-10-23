import express, { Request, Response } from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import { logger } from '../config/logger';
import OpenAI from 'openai';

const router = express.Router();

// Initialize OpenAI client
const openai = process.env.OPENAI_API_KEY 
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

// Department-specific system prompts
const DEPARTMENT_PROMPTS: Record<string, string> = {
  it: `You are an AI assistant specialized in IT operations and service desk management. 
You help with access provisioning, asset management, ITSM workflows, ticket resolution, 
and technical support tasks. Provide clear, actionable responses for IT operations.`,
  
  hr: `You are an AI assistant specialized in HR and People Operations. 
You help with employee onboarding, offboarding, benefits administration, leave management, 
performance reviews, and HR policy questions. Provide professional, compliant responses.`,
  
  procurement: `You are an AI assistant specialized in Procurement and Vendor Management. 
You help with purchase requests, vendor onboarding, invoice processing, contract management, 
spend analysis, and supplier relationships. Focus on cost optimization and compliance.`,
  
  legal: `You are an AI assistant specialized in Legal Operations and Compliance. 
You help with contract review, compliance monitoring, legal documentation, risk assessment, 
and policy management. Always emphasize accuracy and regulatory compliance.`,
  
  finance: `You are an AI assistant specialized in Finance and Accounting Operations. 
You help with invoice processing, expense management, budget tracking, financial reporting, 
audit trails, and account reconciliation. Focus on accuracy and financial best practices.`,
  
  general: `You are a helpful AI assistant for business operations. 
You provide clear, professional assistance across various business functions including 
workflow automation, process optimization, and operational efficiency.`,
};

// Execute AI task
router.post('/execute', asyncHandler(async (req: Request, res: Response) => {
  const { prompt, department = 'general', context, temperature = 0.7, max_tokens = 500 } = req.body;
  
  if (!prompt) {
    res.status(400).json({
      success: false,
      message: 'Prompt is required',
    });
    return;
  }
  
  // Check if OpenAI is configured
  if (!openai) {
    logger.warn('OpenAI API not configured, returning mock response');
    res.json({
      success: true,
      result: `[Mock Response] I understand you want help with: "${prompt}". 
This is a simulated response. To get real AI assistance, please configure your OpenAI API key in the backend .env file.`,
      taskId: `mock-${Date.now()}`,
      department,
      mock: true,
    });
    return;
  }
  
  try {
    // Get department-specific system prompt
    const systemPrompt = DEPARTMENT_PROMPTS[department.toLowerCase()] || DEPARTMENT_PROMPTS.general;
    
    // Build messages array
    const messages: any[] = [
      { role: 'system', content: systemPrompt },
    ];
    
    // Add context if provided
    if (context) {
      messages.push({ role: 'system', content: `Additional context: ${context}` });
    }
    
    // Add user prompt
    messages.push({ role: 'user', content: prompt });
    
    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages,
      temperature: Number(temperature),
      max_tokens: Number(max_tokens),
    });
    
    const result = completion.choices[0]?.message?.content || 'No response generated';
    
    logger.info(`AI task executed for department: ${department}`);
    
    res.json({
      success: true,
      result,
      taskId: completion.id,
      department,
      usage: completion.usage,
      model: completion.model,
    });
  } catch (error: any) {
    logger.error('OpenAI API error:', error);
    
    if (error.status === 401) {
      res.status(401).json({
        success: false,
        message: 'Invalid OpenAI API key',
      });
      return;
    }
    
    if (error.status === 429) {
      res.status(429).json({
        success: false,
        message: 'OpenAI API rate limit exceeded',
      });
      return;
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to execute AI task',
      error: error.message,
    });
  }
}));

// Chat with AI (multi-turn conversation)
router.post('/chat', asyncHandler(async (req: Request, res: Response) => {
  const { messages, department = 'general', temperature = 0.7, max_tokens = 500 } = req.body;
  
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({
      success: false,
      message: 'Messages array is required',
    });
    return;
  }
  
  if (!openai) {
    res.json({
      success: true,
      result: 'OpenAI API is not configured. Please add your API key to use this feature.',
      mock: true,
    });
    return;
  }
  
  try {
    const systemPrompt = DEPARTMENT_PROMPTS[department.toLowerCase()] || DEPARTMENT_PROMPTS.general;
    
    const fullMessages = [
      { role: 'system', content: systemPrompt },
      ...messages,
    ];
    
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: fullMessages as any,
      temperature: Number(temperature),
      max_tokens: Number(max_tokens),
    });
    
    const result = completion.choices[0]?.message?.content || 'No response generated';
    
    logger.info(`AI chat executed for department: ${department}`);
    
    res.json({
      success: true,
      result,
      taskId: completion.id,
      department,
      usage: completion.usage,
    });
  } catch (error: any) {
    logger.error('OpenAI chat error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process chat',
      error: error.message,
    });
  }
}));

// Get available AI models
router.get('/models', asyncHandler(async (req: Request, res: Response) => {
  if (!openai) {
    res.json({
      success: true,
      models: [],
      message: 'OpenAI API not configured',
    });
    return;
  }
  
  try {
    const models = await openai.models.list();
    
    // Filter for GPT models
    const gptModels = models.data
      .filter(model => model.id.includes('gpt'))
      .map(model => ({
        id: model.id,
        created: model.created,
        owned_by: model.owned_by,
      }));
    
    res.json({
      success: true,
      models: gptModels,
    });
  } catch (error: any) {
    logger.error('Failed to fetch models:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch models',
    });
  }
}));

// Get department information
router.get('/departments', asyncHandler(async (req: Request, res: Response) => {
  const departments = [
    {
      id: 'it',
      name: 'IT Operations',
      description: 'Access provisioning, asset management, ITSM workflows, and technical support',
      capabilities: [
        'Access provisioning',
        'Asset management',
        'Ticket resolution',
        'Technical support',
        'ITSM workflows',
      ],
    },
    {
      id: 'hr',
      name: 'HR & People Ops',
      description: 'Employee lifecycle management, benefits, and HR operations',
      capabilities: [
        'Employee onboarding',
        'Offboarding processes',
        'Benefits administration',
        'Leave management',
        'Performance reviews',
      ],
    },
    {
      id: 'procurement',
      name: 'Procurement',
      description: 'Vendor management, purchasing, and contract handling',
      capabilities: [
        'Vendor onboarding',
        'Purchase requests',
        'Invoice processing',
        'Contract management',
        'Spend analysis',
      ],
    },
    {
      id: 'legal',
      name: 'Legal Operations',
      description: 'Contract review, compliance monitoring, and legal documentation',
      capabilities: [
        'Contract review',
        'Compliance monitoring',
        'Legal documentation',
        'Risk assessment',
        'Policy management',
      ],
    },
    {
      id: 'finance',
      name: 'Finance',
      description: 'Financial operations, invoicing, and reporting',
      capabilities: [
        'Invoice processing',
        'Expense management',
        'Budget tracking',
        'Financial reporting',
        'Account reconciliation',
      ],
    },
  ];
  
  res.json({
    success: true,
    departments,
  });
}));

// Generate workflow automation suggestion
router.post('/suggest-workflow', asyncHandler(async (req: Request, res: Response) => {
  const { process_description, department } = req.body;
  
  if (!process_description) {
    res.status(400).json({
      success: false,
      message: 'process_description is required',
    });
    return;
  }
  
  if (!openai) {
    res.json({
      success: true,
      suggestion: 'OpenAI API not configured. Please add your API key to use this feature.',
      mock: true,
    });
    return;
  }
  
  try {
    const prompt = `Given this business process: "${process_description}"
    
Suggest a detailed workflow automation plan including:
1. Key steps to automate
2. Required integrations
3. Expected time savings
4. Implementation complexity (Low/Medium/High)
5. ROI estimate

Provide a structured, actionable response.`;
    
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a workflow automation expert. Provide detailed, actionable automation suggestions.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 800,
    });
    
    const suggestion = completion.choices[0]?.message?.content || 'No suggestion generated';
    
    logger.info(`Workflow suggestion generated for department: ${department || 'general'}`);
    
    res.json({
      success: true,
      suggestion,
      department: department || 'general',
    });
  } catch (error: any) {
    logger.error('Failed to generate workflow suggestion:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate suggestion',
    });
  }
}));

export default router;
