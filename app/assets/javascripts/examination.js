$(document).ready(function() {
  examination.isExamination();
});

var examination = (function() {
  return {
    isExamination: function() {
      if (document.location.pathname.match("/examination/")) {
        examination.markUserSelection();
      }
    },
    markUserSelection: function() {
      $('.examination-choice').on('click', function() {
        // visually mark the user's selected answer choice
        var selectedChoice = $(this);

        selectedChoice.css('background-color', 'rgba(27, 195, 248, 1.0)');

        selectedChoice.parent().children().each(function(idx, choice) {
          if (!$(choice).is(selectedChoice)) {
            $(choice).css('background-color', '');
          }
        });

      })
    }
  }
})();