/**
 * Injects a customizable overlay into the Kick player.
 */
export function injectOverlay() {
  if (!document.getElementById('goated-kick-overlay')) {
    const overlay = document.createElement('div');
    overlay.id = 'goated-kick-overlay';
    overlay.style.position = 'absolute';
    overlay.style.top = '10px';
    overlay.style.right = '10px';
    overlay.style.zIndex = 9999;
    overlay.innerHTML = '<span>Goated Kick Overlay</span>';
    document.body.appendChild(overlay);
  }
} 