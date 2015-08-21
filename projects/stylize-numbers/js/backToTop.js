(function () {
  /* Reference: http://jsfiddle.net/panman8201/mkzrm/10/ */
  // Only enable if the document has a long scroll bar
  // Note the window height + offset

  $('#top-link-block').removeClass('hidden').affix({
      // how far to scroll down before link "slides" into view
      offset: {top:100}
  });
})();







