$(document).ready(function(){
  question.listenAndInsert();
  choice.listenAndInsert();
  submit.listen();
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
          question.incrementQuestionNum();
        });
      }
    },

    incrementQuestionNum: function() {
      var questionTemplate = $('.question-template');
      var questionNum = parseInt(questionTemplate.attr('data-question-num'));
      questionNum += 1;
      questionNum = questionNum.toString();
      questionTemplate.attr('data-question-num', questionNum);
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
        radio.insertRadio($(this));
      });
    }
  }
})();

var radio = (function() {
  // private vars and functions
  // public interface
  return {
    incrementRadioGroup: function() {
      var radioTemplate = $('.choice-radio-template');
      var questionNum = parseInt(radioTemplate.attr('name'));
      questionNum++;
      questionNum = questionNum.toString();
      radioTemplate.attr('name', questionNum);
    },

    insertRadio: function(questionButton) {
      var radio = $('.choice-radio-template').clone();

      radio.attr('class', 'choice-radio');

      var questionPanel = $(questionButton).parent().parent();
      var questionNumber = questionPanel.attr('data-question-num');

      radio.attr('name', questionNumber)

      var radioValue = $(questionButton).parent().find('.choice-radio').length.toString();
      radio.attr('value', radioValue);

      radio.insertBefore($(questionButton).prev());
    }
  }
})();

var submit = (function() {
  return {
    listen: function() {
      $('.submit-quiz-changes').on('click', function() {
        submit.send();
      });
    },

    send: function() {
      $.ajax({
        type: "POST",
        url: "/quizzes",
        data: "hello"
      }).done(function() {
        console.log("hello there!");
      }).fail(function() {
        console.log("submit button was clicked and ajax call failed.");
      });
    }
  }
})();

