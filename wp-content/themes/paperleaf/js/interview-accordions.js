(function () {
  'use strict';

  if (!window.matchMedia('(max-width: 700px)').matches) {
    return;
  }

  document.querySelectorAll('.interview-accordion').forEach(function (section) {
    section.open = true;
  });
}());
