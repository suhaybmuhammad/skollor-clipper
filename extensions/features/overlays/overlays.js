/**
 * overlays.js - Core overlay management for the extension
 * Handles creation, updating, removal, and event hooks for overlays.
 * Part of the overlays feature set (1/6)
 */

export class OverlayManager {
  constructor() {
    this.overlays = [];
  }

  /**
   * Create a new overlay and add it to the DOM.
   * @param {Object} options - Overlay options (position, content, style)
   * @returns {HTMLElement} The created overlay element
   */
  createOverlay(options = {}) {
    const overlay = document.createElement('div');
    overlay.className = 'goated-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = options.top || '20px';
    overlay.style.left = options.left || '20px';
    overlay.style.zIndex = 9999;
    overlay.style.background = options.background || '#FFD700';
    overlay.style.color = options.color || '#181a20';
    overlay.style.padding = options.padding || '16px 32px';
    overlay.style.borderRadius = options.borderRadius || '10px';
    overlay.style.boxShadow = options.boxShadow || '0 2px 8px #0003';
    overlay.innerHTML = options.content || '<b>Goated Overlay</b>';
    document.body.appendChild(overlay);
    this.overlays.push(overlay);
    this._addEventHooks(overlay);
    return overlay;
  }

  /**
   * Remove an overlay from the DOM.
   * @param {HTMLElement} overlay
   */
  removeOverlay(overlay) {
    if (overlay && overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
      this.overlays = this.overlays.filter(o => o !== overlay);
    }
  }

  /**
   * Remove all overlays.
   */
  removeAll() {
    this.overlays.forEach(o => o.parentNode && o.parentNode.removeChild(o));
    this.overlays = [];
  }

  /**
   * Add event hooks (drag, close, etc.) to an overlay.
   * @param {HTMLElement} overlay
   */
  _addEventHooks(overlay) {
    // Drag-and-drop support
    let isDragging = false, x = 0, y = 0, offsetX = 0, offsetY = 0;
    overlay.onmousedown = function(e) {
      isDragging = true;
      offsetX = e.clientX - overlay.offsetLeft;
      offsetY = e.clientY - overlay.offsetTop;
      document.onmousemove = function(e) {
        if (isDragging) {
          x = e.clientX - offsetX;
          y = e.clientY - offsetY;
          overlay.style.left = x + 'px';
          overlay.style.top = y + 'px';
        }
      };
      document.onmouseup = function() {
        isDragging = false;
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
    // Close on double-click
    overlay.ondblclick = () => this.removeOverlay(overlay);
  }
}

// Example usage
// const manager = new OverlayManager();
// manager.createOverlay({ content: 'Hello, world!' }); 