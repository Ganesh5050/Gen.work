import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = (measurementId: string) => {
  if (!measurementId) {
    console.warn('Google Analytics Measurement ID not provided');
    return;
  }
  
  ReactGA.initialize(measurementId, {
    gaOptions: {
      cookieFlags: 'SameSite=None;Secure',
    },
  });
};

// Track page view
export const trackPageView = (path: string, title?: string) => {
  ReactGA.send({ hitType: 'pageview', page: path, title });
};

// Track custom events
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean = true) => {
  trackEvent('Form', success ? 'Submit Success' : 'Submit Error', formName);
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('Button', 'Click', `${buttonName}${location ? ` - ${location}` : ''}`);
};

// Track outbound links
export const trackOutboundLink = (url: string, label?: string) => {
  trackEvent('Outbound Link', 'Click', label || url);
};

