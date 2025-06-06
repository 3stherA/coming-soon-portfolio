// Live Clock
function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  clock.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();

// Camera Roll Preview
const cameraImages = [
  "images/cameraRoll/cruise.jpg",
  "images/cameraRoll/montanas.jpg"
];

let currentIndex = 0;
const cameraPreview = document.getElementById('cameraPreview');

setInterval(() => {
  currentIndex = (currentIndex + 1) % cameraImages.length;
  cameraPreview.src = cameraImages[currentIndex];
}, 6000);
