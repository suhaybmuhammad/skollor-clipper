import { injectRobloxAnalyticsPanel } from './features/analytics.js';
import { injectOverlay } from './features/overlays.js';
import { runAutomation } from './features/automation.js';
import { enhanceAccessibility } from './features/accessibility.js';
import { injectCreatorHubPanel } from './features/creator-hub.js';

(function() {
  setInterval(() => {
    injectRobloxAnalyticsPanel();
    injectOverlay();
    runAutomation();
    enhanceAccessibility();
    injectCreatorHubPanel();
  }, 2000);
})(); 