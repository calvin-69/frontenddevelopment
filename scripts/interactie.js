// Select the button element by its ID
const button = document.getElementById('microInteraction');

// Select the audio element by its ID
const audio = document.getElementById('audio');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Check if the audio is currently paused or ended
  if (audio.paused || audio.ended) {
    // If it is, play the audio
    audio.play();
  } else {
    // If it's already playing, pause and reset it
    audio.pause();
    audio.currentTime = 0;
  }
});