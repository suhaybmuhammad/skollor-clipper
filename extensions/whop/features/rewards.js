/**
 * Injects a Goated Automation panel into the Whop sidebar for rewards automation.
 */
export function injectWhopAutomationPanel() {
  const sidebar = document.querySelector('.Sidebar__container');
  if (sidebar && !document.getElementById('goated-whop-panel')) {
    const panel = document.createElement('div');
    panel.id = 'goated-whop-panel';
    panel.className = 'Sidebar__section';
    panel.innerHTML = `
      <h3 class="Sidebar__title">Goated Automation</h3>
      <button class="Button Button--primary" id="whop-auto-clip">Auto-Clip</button>
      <button class="Button Button--secondary" id="whop-rewards">Rewards</button>
      <button class="Button Button--primary" id="whop-export-clips">Export Clips</button>
      <button class="Button Button--secondary" id="whop-export-rewards">Export Rewards</button>
      <button class="Button Button--primary" id="whop-claim-all-rewards">Claim All Rewards</button>
      <button class="Button Button--primary" id="whop-analytics">Analytics</button>
    `;
    sidebar.appendChild(panel);
    document.getElementById('whop-auto-clip').onclick = () => {
      const clips = getClips();
      alert(`Found ${clips.length} clips on this page!`);
    };
    document.getElementById('whop-rewards').onclick = () => {
      const rewards = getRewards();
      alert(`Found ${rewards.length} rewards on this page!`);
    };
    document.getElementById('whop-export-clips').onclick = () => {
      const clips = getClips();
      exportList(clips, 'whop-clips.json');
    };
    document.getElementById('whop-export-rewards').onclick = () => {
      const rewards = getRewards();
      exportList(rewards, 'whop-rewards.json');
    };
    document.getElementById('whop-claim-all-rewards').onclick = () => {
      const rewards = getRewards();
      let claimed = 0;
      rewards.forEach(reward => {
        // Simulate clicking claim button if present
        const claimBtn = reward.querySelector('button, .claim-btn, [data-action="claim"]');
        if (claimBtn) {
          claimBtn.click();
          claimed++;
        }
      });
      alert(`Attempted to claim ${claimed} rewards!`);
    };
    document.getElementById('whop-analytics').onclick = showAnalyticsModal;
  }
}

function getClips() {
  return Array.from(document.querySelectorAll('.ClipCard, .clip-card, [data-clip-id]'));
}
function getRewards() {
  return Array.from(document.querySelectorAll('.RewardCard, .reward-card, [data-reward-id]'));
}
function exportList(items, filename) {
  const data = items.map(el => el.innerText || el.textContent || '').filter(Boolean);
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}
function showAnalyticsModal() {
  if (document.getElementById('whop-analytics-modal')) return;
  const clips = getClips();
  const rewards = getRewards();
  const modal = document.createElement('div');
  modal.id = 'whop-analytics-modal';
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
    <h2>Whop Analytics</h2>
    <ul>
      <li>Clips found: ${clips.length}</li>
      <li>Rewards found: ${rewards.length}</li>
      <li>Exported clips: <span id="whop-exported-clips-count">0</span></li>
      <li>Exported rewards: <span id="whop-exported-rewards-count">0</span></li>
      <li>Claimed rewards: <span id="whop-claimed-rewards-count">0</span></li>
    </ul>
    <button id="close-whop-analytics-modal">Close</button>
  `;
  document.body.appendChild(modal);
  document.getElementById('close-whop-analytics-modal').onclick = () => {
    document.body.removeChild(modal);
  };
  // Optionally, send analytics to backend
  // fetch('https://your-backend/whop-analytics', { method: 'POST', body: JSON.stringify({ clips: clips.length, rewards: rewards.length }) });
} 