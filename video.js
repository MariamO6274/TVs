
        const video = document.getElementById('video');
        const playPauseButton = document.getElementById('play-pause');
        const backwardButton = document.getElementById('backward');
        const forwardButton = document.getElementById('forward');
        const timeDisplay = document.getElementById('time');
        const volumeControl = document.getElementById('volume');
        const progressBar = document.getElementById('progress-bar');

        function togglePlay() {
            if (video.paused || video.ended) {
                video.play();
                playPauseButton.textContent = "⏸";
            } else {
                video.pause();
                playPauseButton.textContent = "▶️";
            }
        }

        function backward() {
            video.currentTime -= 5;
        }

        function forward() {
            video.currentTime += 5;
        }

        function setVolume() {
            video.volume = volumeControl.value;
        }

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
            return `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }

        video.addEventListener('timeupdate', updateProgress);
   