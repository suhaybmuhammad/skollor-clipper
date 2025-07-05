/**
 * Ensures all injected UI is accessible (ARIA, keyboard navigation, etc.)
 */
export function enhanceAccessibility() {
  // Add ARIA roles to overlays and modals
  const overlay = document.getElementById('goated-roblox-overlay');
  if (overlay) {
    overlay.setAttribute('role', 'region');
    overlay.setAttribute('aria-label', 'Goated Roblox Overlay');
    overlay.tabIndex = 0;
    overlay.onkeydown = function(e) {
      if (e.key === 'Escape') overlay.blur();
    };
  }
  const modal = document.getElementById('roblox-analytics-modal');
  if (modal) {
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.tabIndex = 0;
    modal.focus();
    modal.onkeydown = function(e) {
      if (e.key === 'Escape') document.body.removeChild(modal);
    };
  }
} 