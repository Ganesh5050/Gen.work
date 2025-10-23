import mongoose, { Document, Schema } from 'mongoose';

export interface IAccessRequest extends Document {
  fullName: string;
  email: string;
  company: string;
  companySize?: string;
  primaryUseCase?: string;
  status: 'pending' | 'approved' | 'rejected' | 'contacted';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const accessRequestSchema = new Schema<IAccessRequest>({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    maxlength: [100, 'Full name cannot be longer than 100 characters'],
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
  companySize: {
    type: String,
    trim: true,
    enum: ['1-50 employees', '51-200 employees', '201-500 employees', '501-1000 employees', '1000+ employees', ''],
  },
  primaryUseCase: {
    type: String,
    trim: true,
    enum: ['IT Operations', 'HR Management', 'Procurement', 'Legal Operations', 'Travel Management', 'Finance', 'Other', ''],
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'contacted'],
    default: 'pending',
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
accessRequestSchema.index({ email: 1 });
accessRequestSchema.index({ company: 1 });
accessRequestSchema.index({ status: 1 });
accessRequestSchema.index({ createdAt: -1 });

export default mongoose.model<IAccessRequest>('AccessRequest', accessRequestSchema);