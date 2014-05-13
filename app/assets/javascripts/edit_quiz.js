$(document).ready(function(){
  var questionButton = $('.add-question')[0];
  if (questionButton) {
    $(questionButton).on('click', function(e){
      e.preventDefault();
      question.insert();
    });
  }
  choice.listen();
});

var question = (function(){
  // private vars and functions
  var _question = $('.question-template').clone();
  // public interface
  return {
    insert: function() {
      var questionTitle = $('.question-template').clone();
      $(questionTitle).attr('class', 'panel panel-default question-panel');
      $(questionTitle).insertBefore($('.add-question'));
    }
  }
})();

var choice = (function(){
  // private vars and functions
  var _choice = function() {
    var choice = $('.choice-template').clone();
    choice.attr('class', 'choice');
    return choice;
  }
  // public interface
  return {
    listen: function() {
      $('.body-container').on('click', '.add-choice', function(e) {
        _choice().insertBefore($(this));
      });
    }
  }
})();