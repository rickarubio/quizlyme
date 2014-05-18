$(document).ready(function() {
  examination.listen();
});

var examination = (function() {
  return {
    listen: function() {
      $('.examination-link').on('click', function(e) {
        e.preventDefault();
        $('#take-examination-confirmation').modal('show');
        $('.take-exam').on('click', function() {
          document.location.href = e.currentTarget.firstChild.href;
        });
      });
    }
  }
})();
