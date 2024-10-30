// Map sound IDs to their respective buttons and keys
const sounds = {
  boom: { button: "boom", key: "a"},
  clap: { button: "clap", key: "s"},
  hihat: { button: "hihat", key: "d"},
  kick: { button: "kick", key: "f" },
  openhat: { button: "openhat", key: "g"},
  ride: { button: "ride", key: "h" },
  snare: { button: "snare", key: "j" },
  tink: { button: "tink", key: "k"},
  tom: { button: "tom", key: "l" },
};

// Function to play a sound
function playSound(soundId) {
  const sound = document.getElementById(`${soundId}-sound`);
  sound.currentTime = 0;
  sound.play();
}

// Attach click event listeners to buttons
Object.keys(sounds).forEach(soundId => {
  const { button } = sounds[soundId];
  document.getElementById(button).addEventListener("click", () => playSound(soundId));
});

// Attach keydown event listener
document.addEventListener("keydown", event => {
  const soundId = Object.keys(sounds).find(id => sounds[id].key === event.key);
  if (soundId) playSound(soundId);
});
