/**
 * Ensures all injected UI is accessible (ARIA, keyboard navigation, etc.)
 */
export function enhanceAccessibility() {
  // Add ARIA roles to overlays
  const overlay = document.getElementById('goated-rumble-overlay');
  if (overlay) {
    overlay.setAttribute('role', 'region');
    overlay.setAttribute('aria-label', 'Goated Rumble Overlay');
    overlay.tabIndex = 0;
    overlay.onkeydown = function(e) {
      if (e.key === 'Escape') overlay.blur();
    };
  }
} 