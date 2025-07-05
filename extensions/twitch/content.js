import { injectGoatedClipButton } from './features/video-capture.js';
import { injectOverlay } from './features/overlays.js';
import { autoModerateChat } from './features/chat-automation.js';
import { trackUserStats } from './features/analytics.js';
import { enhanceAccessibility } from './features/accessibility.js';

(function() {
  setInterval(() => {
    injectGoatedClipButton();
    injectOverlay();
    autoModerateChat();
    trackUserStats();
    enhanceAccessibility();
  }, 2000);
})(); 