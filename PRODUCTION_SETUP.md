# gen.work Production Setup Guide

This guide covers all production-ready features and their configuration.

## 🎯 Features Implemented

### ✅ SEO Optimization
- **Meta Tags**: Dynamic SEO meta tags on all pages
- **Open Graph**: Full OG tags for social media sharing
- **Twitter Cards**: Twitter-specific meta tags
- **Canonical URLs**: Proper canonical URL management

**Setup**: SEO component automatically included on all pages. No configuration needed.

---

### ✅ Email Notifications (Nodemailer)

Automatic email notifications when users submit forms:
- **Admin Notifications**: Get notified when someone books a demo or requests access
- **User Confirmations**: Automatic confirmation emails sent to users

**Required Environment Variables** (backend/.env):
```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password

# Email Addresses
ADMIN_EMAIL=admin@gen.work
FROM_EMAIL=noreply@gen.work
```

**Gmail Setup**:
1. Enable 2-Factor Authentication in your Google Account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the app password in `SMTP_PASS`

**Alternative SMTP Providers**:
- SendGrid: `SMTP_HOST=smtp.sendgrid.net` + API key
- AWS SES: `SMTP_HOST=email-smtp.us-east-1.amazonaws.com`
- Mailgun: `SMTP_HOST=smtp.mailgun.org`

---

### ✅ Google Analytics 4

Full page view and event tracking:
- **Page Views**: Automatic tracking on route changes
- **Form Submissions**: Track demo and access request conversions
- **Custom Events**: Extensible event tracking system

**Required Environment Variables** (.env):
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Setup**:
1. Create a Google Analytics 4 property: https://analytics.google.com/
2. Get your Measurement ID (starts with G-)
3. Add it to your `.env` file

**Available Tracking Functions**:
```typescript
import { trackEvent, trackFormSubmission, trackButtonClick } from '@/lib/analytics';

// Track custom events
trackEvent('Category', 'Action', 'Label', value);

// Track form submissions
trackFormSubmission('Form Name', true/false);

// Track button clicks
trackButtonClick('Button Name', 'Location');
```

---

### ✅ Live Chat Widget (Crisp)

Beautiful live chat widget for customer support:
- **Real-time Chat**: Instant messaging with visitors
- **Mobile Friendly**: Works perfectly on all devices
- **Free Plan Available**: Crisp offers a generous free tier

**Required Environment Variables** (.env):
```env
VITE_CRISP_WEBSITE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

**Setup**:
1. Sign up at https://crisp.chat/
2. Create a website in your Crisp dashboard
3. Copy your Website ID from Settings → Website Settings
4. Add it to your `.env` file

**Alternative Chat Widgets**:
To switch to Intercom or other providers, replace the `LiveChat.tsx` component with their script.

---

### ✅ Customer Testimonials

Animated testimonials slider with:
- **Auto-play**: Rotates every 5 seconds
- **Manual Navigation**: Arrow buttons and dots
- **Responsive Design**: Beautiful on mobile and desktop

**Customization**:
Edit testimonials in `src/components/TestimonialsSlider.tsx`:
```typescript
const testimonials = [
  {
    quote: "Your testimonial here",
    author: "Name",
    role: "Job Title",
    company: "Company Name",
  },
  // Add more...
];
```

---

### ✅ Loading States

Forms have proper loading states:
- **Disabled During Submit**: Prevents double submissions
- **Visual Feedback**: Clear user feedback during processing
- **Error Handling**: Graceful error messages

Already implemented in `BookDemo.tsx` and `RequestAccess.tsx`.

---

### ✅ Mobile Responsiveness

Optimized for all screen sizes:
- **Touch-friendly**: Minimum 44px tap targets
- **Responsive Typography**: Text scales appropriately
- **Mobile-first Spacing**: Better spacing on small screens
- **Smooth Scrolling**: Enhanced user experience

Mobile optimizations in `src/index.css`.

---

## 🚀 Deployment Checklist

### Frontend (.env)
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_CRISP_WEBSITE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### Backend (backend/.env)
```env
# Server
PORT=3001
NODE_ENV=production

# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your_service_role_key

# JWT
JWT_SECRET=your_secure_random_string

# Email (Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@gen.work
FROM_EMAIL=noreply@gen.work

# Admin Setup
ADMIN_SETUP_SECRET=your-setup-secret
```

---

## 📊 Analytics Events

Automatically tracked events:
- ✅ Page views on all routes
- ✅ Demo request submissions (success/error)
- ✅ Access request submissions (success/error)
- ✅ Form field errors

---

## 🎨 SEO Best Practices

Each page has unique:
- **Title**: Optimized for search engines
- **Description**: Compelling meta descriptions
- **Keywords**: Relevant keyword targeting
- **Canonical URLs**: Prevent duplicate content
- **Open Graph Tags**: Beautiful social sharing

---

## 📧 Email Templates

All emails are HTML formatted with:
- **Branded Design**: gen.work branding
- **Responsive**: Mobile-friendly emails
- **Clear CTAs**: Next steps for users
- **Professional**: Enterprise-ready templates

Customize emails in `backend/src/services/emailService.ts`.

---

## 🔧 Troubleshooting

### Emails Not Sending
1. Check SMTP credentials in backend/.env
2. Enable "Less secure app access" or use App Passwords (Gmail)
3. Check backend logs for error messages

### Analytics Not Working
1. Verify GA_MEASUREMENT_ID is correct
2. Check browser console for errors
3. Use GA4 DebugView to test events

### Live Chat Not Appearing
1. Verify CRISP_WEBSITE_ID is correct
2. Check browser console for script errors
3. Ensure ad blocker is not blocking Crisp

---

## 🎯 Next Steps

Consider adding:
- **Blog CMS**: Integrate with Contentful or Strapi
- **Customer Portal**: Dashboard for logged-in users
- **API Documentation**: If you have a public API
- **Help Center**: Knowledge base for users
- **Video Demos**: Embedded product demos

---

## 📞 Support

For issues or questions:
- Email: support@gen.work
- Live Chat: Available on all pages (once Crisp is configured)
- Documentation: This file

---

**🎉 Your site is now production-ready!**

All features are implemented and ready for deployment. Just add your API keys and credentials, and you're good to go!

