$(document).ready(function(){
  var questionButton = $('.add-question')[0];
  if (questionButton) {
    $(questionButton).on('click', function(e){
      e.preventDefault();
      console.log('button was clicked');
    });
  }
});