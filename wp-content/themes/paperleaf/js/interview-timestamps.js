(function () {
  'use strict';

  function timeToSeconds(value) {
    return value.split(':').reduce(function (total, part) {
      return (total * 60) + Number(part);
    }, 0);
  }

  function videoIdFromUrl(value) {
    var match = value.match(/youtube(?:-nocookie)?\.com\/embed\/([^?&#]+)/);
    return match ? match[1] : '';
  }

  var player = document.querySelector('.video-embed iframe[src*="youtube.com/embed/"], .video-embed iframe[src*="youtube-nocookie.com/embed/"]');
  var timestamps = document.querySelectorAll('.qed_stt_tslink[data-stt-time]');

  if (!player || !timestamps.length) {
    return;
  }

  var videoId = videoIdFromUrl(player.src);

  timestamps.forEach(function (link) {
    var label = link.getAttribute('data-stt-time');
    var seconds = timeToSeconds(label);

    if (videoId) {
      link.href = 'https://www.youtube.com/watch?v=' + videoId + '&t=' + seconds + 's';
    }
    link.setAttribute('aria-label', 'Play interview at ' + label);

    link.addEventListener('click', function (event) {
      var playerUrl;

      try {
        playerUrl = new URL(player.src);
      } catch (error) {
        return;
      }

      event.preventDefault();
      playerUrl.searchParams.set('start', String(seconds));
      playerUrl.searchParams.set('autoplay', '1');
      player.src = playerUrl.toString();
      player.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
}());
