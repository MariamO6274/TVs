
const video = document.getElementById('video');
const playPauseButton = document.getElementById('play-pause');
const backwardButton = document.getElementById('backward');
const forwardButton = document.getElementById('forward');
const timeDisplay = document.getElementById('time');
const volumeControl = document.getElementById('volume');
const progressBar = document.getElementById('progress-bar');


// play and pause button, 
// when we click it's going to check if the video is paused or not
// If the video is already playing it pauses the video
playPauseButton.addEventListener("click", (e) => {
  if (video.paused) {
    video.play();
    e.target.textContent = "⏸";
  } else {
    video.pause();
    e.target.textContent = "▶️";
  }
});

// gadaxveva gadmoxveva 5 cuti backward or forward
function backward() {
    video.currentTime -= 5;
}
function forward() {
    video.currentTime += 5;
}

// valume of the video
// It sets the video element's volume property to current value of volume control input 
function setVolume() {
    video.volume = volumeControl.value;
}

// updating the video playback progress and time display
// takes a time value in seconds and formats it into a "minutes:seconds" string
// It ensures that the seconds portion is padded with a leading '0' if it's a single digit
function updateProgress() {
    const currentTime = video.currentTime;
    const duration = video.duration;
    const progress = (currentTime / duration) * 100;
    progressBar.style.width = `${progress}%`;

    const currentTimeString = formatTime(currentTime);
    const durationString = formatTime(duration);
    timeDisplay.textContent = `${currentTimeString} / ${durationString}`;
}


function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`; // 2 characters. '0' should be used for padding like 01,02,03
}

// When the video's time (currentTime) updates during playback
// it triggers the updateProgress() function to update the progressbar and time display
video.addEventListener('timeupdate', updateProgress);
