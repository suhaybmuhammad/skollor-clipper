/**
 * Injects a livestreams panel into the Whop sidebar for livestreams automation.
 */
export function injectLivestreamsPanel() {
  const sidebar = document.querySelector('.Sidebar__container');
  if (sidebar && !document.getElementById('goated-whop-livestreams')) {
    const panel = document.createElement('div');
    panel.id = 'goated-whop-livestreams';
    panel.className = 'Sidebar__section';
    panel.innerHTML = `
      <h3 class="Sidebar__title">Goated Livestreams</h3>
      <button class="Button Button--primary" id="whop-livestreams">Monitor Livestreams</button>
    `;
    sidebar.appendChild(panel);
    document.getElementById('whop-livestreams').onclick = () => {
      // TODO: Implement livestreams monitoring and automation
      alert('Whop livestreams monitoring running!');
    };
  }
} 