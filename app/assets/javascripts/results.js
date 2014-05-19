$(document).ready(function() {
  results.listen();
});

var results = (function() {
  return {
    listen: function() {
      $('.results-row').on('click', function(e) {
        e.preventDefault();
        var row = $(this);
        var resultID = row.data('results-id');
        window.location = "/results/" + resultID
      })
    }
  }
})();