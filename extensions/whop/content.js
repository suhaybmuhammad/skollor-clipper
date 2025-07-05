import { injectWhopAutomationPanel } from './features/rewards.js';
import { injectDealsPanel } from './features/deals.js';
import { autoChat } from './features/chat.js';
import { injectLivestreamsPanel } from './features/livestreams.js';
import { trackWhopAnalytics } from './features/analytics.js';
import { enhanceAccessibility } from './features/accessibility.js';

(function() {
  setInterval(() => {
    injectWhopAutomationPanel();
    injectDealsPanel();
    autoChat();
    injectLivestreamsPanel();
    trackWhopAnalytics();
    enhanceAccessibility();
  }, 2000);
})(); 