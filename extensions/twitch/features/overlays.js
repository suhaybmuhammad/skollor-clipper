/**
 * Injects a customizable overlay into the Twitch player.
 */
export function injectOverlay() {
  if (!document.getElementById('goated-overlay')) {
    const overlay = document.createElement('div');
    overlay.id = 'goated-overlay';
    overlay.style.position = 'absolute';
    overlay.style.top = '10px';
    overlay.style.right = '10px';
    overlay.style.zIndex = 9999;
    overlay.innerHTML = '<span>Goated Overlay</span>';
    document.body.appendChild(overlay);
  }
} 