/**
 * Injects a Goated Clip button into the Twitch player controls.
 * Uses MediaRecorder to capture video from the stream.
 */
let mediaRecorder = null;
let recordedChunks = [];
let recordingTimeout = null;

export function injectGoatedClipButton() {
  const controlsBar = document.querySelector('.player-controls__right-control-group');
  if (controlsBar && !document.getElementById('goated-clip-btn')) {
    const btn = document.createElement('button');
    btn.id = 'goated-clip-btn';
    btn.className = 'tw-button tw-button--success';
    btn.innerHTML = '<svg width="20" height="20" ...></svg> Goated Clip';
    btn.onclick = () => startRecording();
    controlsBar.appendChild(btn);
  }
}

/**
 * Starts recording the Twitch video stream using MediaRecorder.
 * Records the last 30 seconds and allows the user to download the clip.
 */
export function startRecording() {
  const video = document.querySelector('video');
  if (!video) return alert('No video found!');
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    stopRecording();
    return;
  }
  // Create a MediaStream from the video element
  const stream = video.captureStream();
  mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp9' });
  recordedChunks = [];
  mediaRecorder.ondataavailable = (e) => {
    if (e.data.size > 0) recordedChunks.push(e.data);
  };
  mediaRecorder.onstop = () => {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'goated-twitch-clip.webm';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  };
  mediaRecorder.start();
  alert('Recording started! Capturing 30 seconds...');
  recordingTimeout = setTimeout(stopRecording, 30000);
}

function stopRecording() {
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    mediaRecorder.stop();
    clearTimeout(recordingTimeout);
    alert('Recording stopped! Clip is downloading.');
  }
} 