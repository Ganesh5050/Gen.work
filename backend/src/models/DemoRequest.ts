import mongoose, { Document, Schema } from 'mongoose';

export interface IDemoRequest extends Document {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle?: string;
  department?: string;
  needs?: string;
  status: 'pending' | 'contacted' | 'scheduled' | 'completed' | 'cancelled';
  scheduledDate?: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const demoRequestSchema = new Schema<IDemoRequest>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [50, 'First name cannot be longer than 50 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [50, 'Last name cannot be longer than 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email address',
    ],
  },
  company: {
    type: String,
    required: [true, 'Company is required'],
    trim: true,
    maxlength: [100, 'Company name cannot be longer than 100 characters'],
  },
  jobTitle: {
    type: String,
    trim: true,
    maxlength: [100, 'Job title cannot be longer than 100 characters'],
  },
  department: {
    type: String,
    trim: true,
    enum: ['IT Operations', 'HR', 'Procurement', 'Legal', 'Travel', 'Finance', 'Multiple Departments', ''],
  },
  needs: {
    type: String,
    trim: true,
    maxlength: [1000, 'Needs description cannot be longer than 1000 characters'],
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'scheduled', 'completed', 'cancelled'],
    default: 'pending',
  },
  scheduledDate: {
    type: Date,
  },
  notes: {
    type: String,
    trim: true,
    maxlength: [2000, 'Notes cannot be longer than 2000 characters'],
  },
}, {
  timestamps: true,
});

// Indexes for performance
demoRequestSchema.index({ email: 1 });
demoRequestSchema.index({ company: 1 });
demoRequestSchema.index({ status: 1 });
demoRequestSchema.index({ createdAt: -1 });
demoRequestSchema.index({ scheduledDate: 1 });

export default mongoose.model<IDemoRequest>('DemoRequest', demoRequestSchema);