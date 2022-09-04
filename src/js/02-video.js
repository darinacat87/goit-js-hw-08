import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const throttle = require('lodash.throttle');

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on(
  'timeupdate',
  throttle(function () {
    player.getCurrentTime().then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
    });
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
