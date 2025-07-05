/**
 * Tracks Rumble user stats and sends analytics to backend or local storage.
 */
let viewTime = 0;
let lastClipCount = 0;
let lastChatCount = 0;
let analyticsInterval = null;

export function trackRumbleAnalytics() {
  if (!analyticsInterval) {
    analyticsInterval = setInterval(() => {
      viewTime += 5;
      const clips = document.querySelectorAll('.clip-card, .ClipCard, [data-clip-id]');
      const chat = document.querySelectorAll('.chat-messages .message, .chat-scrollable-area__message-container .message');
      const stats = {
        viewTime,
        clips: clips.length,
        newClips: clips.length - lastClipCount,
        chatMessages: chat.length,
        newChat: chat.length - lastChatCount,
        timestamp: Date.now()
      };
      lastClipCount = clips.length;
      lastChatCount = chat.length;
      // Save to local storage
      localStorage.setItem('goatedRumbleStats', JSON.stringify(stats));
      // Optionally, send to backend
      // fetch('https://your-backend/rumble-analytics', { method: 'POST', body: JSON.stringify(stats) });
    }, 5000);
  }
} 