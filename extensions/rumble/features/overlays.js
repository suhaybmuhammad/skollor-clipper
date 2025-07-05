/**
 * Injects a customizable overlay into the Rumble player with drag-and-drop and live stats.
 */
let overlayInterval = null;
export function injectOverlay() {
  if (!document.getElementById('goated-rumble-overlay')) {
    const overlay = document.createElement('div');
    overlay.id = 'goated-rumble-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '10px';
    overlay.style.right = '10px';
    overlay.style.zIndex = 9999;
    overlay.style.background = '#4caf50';
    overlay.style.color = '#fff';
    overlay.style.padding = '12px 24px';
    overlay.style.borderRadius = '8px';
    overlay.style.boxShadow = '0 2px 8px #0003';
    overlay.style.cursor = 'move';
    overlay.innerHTML = '<b>Goated Rumble Overlay</b><br><span id="rumble-overlay-stats">Loading...</span>';
    document.body.appendChild(overlay);
    makeDraggable(overlay);
    updateStats();
    overlayInterval = setInterval(updateStats, 5000);
  }
}

function updateStats() {
  const stats = document.getElementById('rumble-overlay-stats');
  if (stats) {
    // Fake stats for demo; replace with real data as needed
    stats.innerHTML = `Viewers: ${Math.floor(Math.random()*10000)}<br>Clips: ${Math.floor(Math.random()*100)}<br>Likes: ${Math.floor(Math.random()*1000)}`;
  }
}

function makeDraggable(el) {
  let isDragging = false, x = 0, y = 0, offsetX = 0, offsetY = 0;
  el.onmousedown = function(e) {
    isDragging = true;
    offsetX = e.clientX - el.offsetLeft;
    offsetY = e.clientY - el.offsetTop;
    document.onmousemove = function(e) {
      if (isDragging) {
        x = e.clientX - offsetX;
        y = e.clientY - offsetY;
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        el.style.right = '';
      }
    };
    document.onmouseup = function() {
      isDragging = false;
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };
} 