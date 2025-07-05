/**
 * Automatically moderates Rumble chat using regex and AI.
 */
const BANNED_WORDS = ['spam', 'scam', 'troll'];
const AUTO_REPLY_KEYWORDS = { 'hello': 'Hey there! Welcome to the stream!', 'help': 'Type !commands for help.' };

export function autoModerateChat() {
  const chat = document.querySelector('.chat-messages, .chat-scrollable-area__message-container');
  if (!chat) return;
  Array.from(chat.children).forEach(msg => {
    const text = msg.innerText.toLowerCase();
    // Hide messages with banned words
    if (BANNED_WORDS.some(word => text.includes(word))) {
      msg.style.display = 'none';
    }
    // Auto-reply to keywords
    Object.entries(AUTO_REPLY_KEYWORDS).forEach(([keyword, reply]) => {
      if (text.includes(keyword) && !msg.dataset.goatedReplied) {
        msg.dataset.goatedReplied = '1';
        setTimeout(() => sendChatMessage(reply), 500);
      }
    });
  });
}

function sendChatMessage(message) {
  const input = document.querySelector('input[type="text"], textarea');
  if (input) {
    input.value = message;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    const form = input.closest('form');
    if (form) form.dispatchEvent(new Event('submit', { bubbles: true }));
  }
} 