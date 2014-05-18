$(document).ready(function() {
  confirmTakeExamination.listen();
});

var confirmTakeExamination = (function() {

  return {
    listen: function() {
      $('.examination-link > a').on('click', function(e) {
        e.preventDefault();
        $('#take-examination-confirmation').modal('show');
        $('.take-exam').on('click', function() {
          document.location.href = e.currentTarget.href;
        });
      });
    }
  }
})();
