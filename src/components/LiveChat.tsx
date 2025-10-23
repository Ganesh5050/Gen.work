import { useEffect } from 'react';

interface LiveChatProps {
  websiteId?: string; // Crisp website ID
}

const LiveChat = ({ websiteId }: LiveChatProps) => {
  useEffect(() => {
    const CRISP_WEBSITE_ID = websiteId || import.meta.env.VITE_CRISP_WEBSITE_ID;
    
    if (!CRISP_WEBSITE_ID) {
      console.warn('Crisp website ID not provided. Live chat will not be loaded.');
      return;
    }

    // Load Crisp chat script
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

    const script = document.createElement('script');
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    document.getElementsByTagName('head')[0].appendChild(script);

    // Cleanup function
    return () => {
      // Remove Crisp script on unmount
      const crispScript = document.querySelector('script[src="https://client.crisp.chat/l.js"]');
      if (crispScript) {
        crispScript.remove();
      }
      delete window.$crisp;
      delete window.CRISP_WEBSITE_ID;
      
      // Remove Crisp chat widget
      const crispClient = document.getElementById('crisp-chatbox');
      if (crispClient) {
        crispClient.remove();
      }
    };
  }, [websiteId]);

  return null; // This component doesn't render anything visible
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
  }
}

export default LiveChat;

