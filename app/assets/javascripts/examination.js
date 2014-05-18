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
          $.ajax({
            type: 'GET',
            url: /examination/:id/user/:id
          }).done(function() {
            console.log('examination now commencing!');
          }).fail(function() {
            console.log('failed to take the examination');
          });
        });
      });
    }
  }
})();
