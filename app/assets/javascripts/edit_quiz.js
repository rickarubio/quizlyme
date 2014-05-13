$(document).ready(function(){
  question.listenAndInsert();
  choice.listenAndInsert();
});

var question = (function(){
  // private vars and functions
  var _question = function() {
    var question = $('.question-template').clone();
    $(question).attr('class', 'panel panel-default question-panel');
    return question;
  }
  // public interface
  return {
    listenAndInsert: function() {
      var questionButton = $('.add-question')[0];
      if (questionButton) {
        $(questionButton).on('click', function(e){
          e.preventDefault();
          _question().insertBefore($('.add-question'));
        });
      }
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
    listenAndInsert: function() {
      $('.body-container').on('click', '.add-choice', function(e) {
        _choice().insertBefore($(this));
      });
    }
  }
})();

