$(document).ready(function() {
  test.listen();
});

var test = (function() {
  return {
    listen: function() {
      $('.test-link').on('click', function(e) {
        e.preventDefault();
        var confirm = window.confirm("Do you wish to proceed and take this test? Results will be logged.");

        if (confirm === true) {
          console.log('testing shall commence!');
        } else { 
          console.log('user opted to not test at this moment'); 
        }
      });
    }
  }
})();