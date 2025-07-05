/**
 * Injects a deals panel into the Whop sidebar for deals automation.
 */
export function injectDealsPanel() {
  const sidebar = document.querySelector('.Sidebar__container');
  if (sidebar && !document.getElementById('goated-whop-deals')) {
    const panel = document.createElement('div');
    panel.id = 'goated-whop-deals';
    panel.className = 'Sidebar__section';
    panel.innerHTML = `
      <h3 class="Sidebar__title">Goated Deals</h3>
      <button class="Button Button--primary" id="whop-deals">Find Deals</button>
    `;
    sidebar.appendChild(panel);
    document.getElementById('whop-deals').onclick = () => {
      // TODO: Implement deals scraping and automation
      alert('Whop deals automation running!');
    };
  }
} 