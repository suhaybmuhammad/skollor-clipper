/**
 * Injects a Goated Analytics panel into Roblox's sidebar or dashboard.
 */
export function injectRobloxAnalyticsPanel() {
  const sidebar = document.querySelector('.sidebar-container, .rbx-sidebar');
  if (sidebar && !document.getElementById('goated-roblox-panel')) {
    const panel = document.createElement('div');
    panel.id = 'goated-roblox-panel';
    panel.className = 'sidebar-section';
    panel.innerHTML = `
      <h3 class="sidebar-title">Goated Analytics</h3>
      <button class="btn-primary" id="roblox-analytics">Show Analytics</button>
    `;
    sidebar.appendChild(panel);
    document.getElementById('roblox-analytics').onclick = showAnalyticsModal;
  }
}

function showAnalyticsModal() {
  if (document.getElementById('roblox-analytics-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'roblox-analytics-modal';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.background = '#23272f';
  modal.style.color = '#fff';
  modal.style.padding = '32px';
  modal.style.borderRadius = '12px';
  modal.style.zIndex = 10000;
  modal.innerHTML = `
    <h2>Roblox Analytics</h2>
    <ul>
      <li>Playtime: 123h</li>
      <li>Trades: 42</li>
      <li>Value: 1,234,567</li>
      <li>Profit: 12,345</li>
      <li>Friends: 99</li>
    </ul>
    <button id="close-roblox-analytics-modal">Close</button>
  `;
  document.body.appendChild(modal);
  document.getElementById('close-roblox-analytics-modal').onclick = () => {
    document.body.removeChild(modal);
  };
} 