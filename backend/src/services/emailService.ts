import nodemailer from 'nodemailer';
import { logger } from '../config/logger';

// Email configuration
const EMAIL_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
};

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@gen.work';
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@gen.work';

// Create reusable transporter
const createTransporter = () => {
  if (!EMAIL_CONFIG.auth.user || !EMAIL_CONFIG.auth.pass) {
    logger.warn('Email credentials not configured. Emails will not be sent.');
    return null;
  }
  
  return nodemailer.createTransport(EMAIL_CONFIG);
};

// Send demo request notification to admin
export const sendDemoRequestNotification = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  department: string;
  needs: string;
}) => {
  const transporter = createTransporter();
  if (!transporter) return;

  const mailOptions = {
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    subject: `New Demo Request from ${data.company}`,
    html: `
      <h2>New Demo Request</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Job Title:</strong> ${data.jobTitle}</p>
      <p><strong>Department:</strong> ${data.department}</p>
      <p><strong>Needs:</strong></p>
      <p>${data.needs}</p>
      <hr>
      <p><small>Received at: ${new Date().toLocaleString()}</small></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    logger.info(`Demo request notification sent to admin for ${data.email}`);
  } catch (error) {
    logger.error('Failed to send demo request notification:', error);
  }
};

// Send demo request confirmation to user
export const sendDemoRequestConfirmation = async (email: string, firstName: string) => {
  const transporter = createTransporter();
  if (!transporter) return;

  const mailOptions = {
    from: FROM_EMAIL,
    to: email,
    subject: 'Your gen.work Demo Request Received',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #22c55e;">Thank You for Your Interest in gen.work!</h2>
        <p>Hi ${firstName},</p>
        <p>We've received your demo request and are excited to show you how AI Workers can transform your operations.</p>
        <p>Our team will review your request and reach out within 1-2 business days to schedule a personalized demo.</p>
        <p>In the meantime, feel free to explore:</p>
        <ul>
          <li><a href="https://gen.work/solutions">Our Solutions</a></li>
          <li><a href="https://gen.work/ai-workers">AI Workers</a></li>
          <li><a href="https://gen.work/pricing">Pricing</a></li>
        </ul>
        <p>Best regards,<br>The gen.work Team</p>
        <hr style="border: 1px solid #eee; margin: 20px 0;">
        <p style="color: #666; font-size: 12px;">
          gen.work - The Next Gen AI Workforce<br>
          <a href="https://gen.work">gen.work</a>
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    logger.info(`Demo confirmation sent to ${email}`);
  } catch (error) {
    logger.error('Failed to send demo confirmation:', error);
  }
};

// Send access request notification to admin
export const sendAccessRequestNotification = async (data: {
  fullName: string;
  email: string;
  company: string;
  companySize: string;
  primaryUseCase: string;
}) => {
  const transporter = createTransporter();
  if (!transporter) return;

  const mailOptions = {
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    subject: `New Access Request from ${data.company}`,
    html: `
      <h2>New Access Request</h2>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Company Size:</strong> ${data.companySize}</p>
      <p><strong>Primary Use Case:</strong></p>
      <p>${data.primaryUseCase}</p>
      <hr>
      <p><small>Received at: ${new Date().toLocaleString()}</small></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    logger.info(`Access request notification sent to admin for ${data.email}`);
  } catch (error) {
    logger.error('Failed to send access request notification:', error);
  }
};

// Send access request confirmation to user
export const sendAccessRequestConfirmation = async (email: string, fullName: string) => {
  const transporter = createTransporter();
  if (!transporter) return;

  const mailOptions = {
    from: FROM_EMAIL,
    to: email,
    subject: 'Your gen.work Access Request Received',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #22c55e;">Thank You for Your Interest in gen.work!</h2>
        <p>Hi ${fullName},</p>
        <p>We've received your access request and will review it carefully.</p>
        <p>We typically respond within 1-2 business days with next steps.</p>
        <p>You're one step closer to transforming your operations with autonomous AI Workers!</p>
        <p>Best regards,<br>The gen.work Team</p>
        <hr style="border: 1px solid #eee; margin: 20px 0;">
        <p style="color: #666; font-size: 12px;">
          gen.work - The Next Gen AI Workforce<br>
          <a href="https://gen.work">gen.work</a>
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    logger.info(`Access confirmation sent to ${email}`);
  } catch (error) {
    logger.error('Failed to send access confirmation:', error);
  }
};

