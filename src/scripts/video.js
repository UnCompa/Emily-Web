import Plyr from 'plyr'
const audio = new Plyr('audio', {
  accentColor: "#0af"
});
const player = Plyr.setup('video', {
  controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
  accentColor: '#b19cd9'
});
const youtube = new Plyr('#player', {
  controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
  accentColor: '#ff0000'
});