$(document).ready(function(){
  question.listenAndInsert();
  choice.listenAndInsert();
  submit.listen();
});

var question = (function(){
  // private vars and functions
  var _question = function() {
    var question = $('.question-template').clone();
    $(question).attr('class', 'panel panel-default question-panel new-question');
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

      radio.attr('name', questionNumber);

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
        submit.send(quiz.ID(), quiz.toJSON());
      });
    },

    send: function(quizID, quizJSON) {
      $.ajax({
        type: "PUT",
        url: "/quizzes/" + quizID,
        data: quizJSON
      }).done(function(data) {
        window.location = "/quizzes/" + quizID;
      }).fail(function() {
        console.log("submit button was clicked and ajax call failed.");
      });
    }
  }
})();

var quiz = (function() {
  return {
    toJSON: function() {
      var quizID = quiz.ID();

      var quizJSON = {
        "quizID": quizID,
        "newQuestions": {},
        "existingQuestions": {}
      }

      // existing questions
      $('.existing-question').each(function(idx, question) {
        var questionText = $(question).find('textarea').val();
        questionID = $(question).attr('data-question-num');

        quizJSON.existingQuestions[questionID] = {"questionText": questionText};
        quizJSON.existingQuestions[questionID]["choices"] = {}

        var choices = $(question).find('.choice');

        $(choices).each(function(idx, choice) {
          var choiceID = parseInt($(choice).attr('data-choice-id')) || "new-choice-" +  idx
          quizJSON.existingQuestions[questionID]["choices"][choiceID] = {}
          quizJSON.existingQuestions[questionID]["choices"][choiceID]["choiceText"] = $(choice).val();

          var isAnswer = $(this).prev()[0].checked

          if (isAnswer) {
            quizJSON.existingQuestions[questionID]["choices"][choiceID]["answer"] = true;
          } else {
            quizJSON.existingQuestions[questionID]["choices"][choiceID]["answer"] = false;
          }
        });
      });

      // new questions
      $('.new-question').each(function(idx, question) {
        var questionText = $(question).find('textarea').val();
        questionID = $(question).attr('data-question-num');

        quizJSON.newQuestions[questionID] = {"questionText": questionText};
        quizJSON.newQuestions[questionID]["choices"] = {}

        var choices = $(question).find('.choice');

        $(choices).each(function(idx, choice) {
          var choiceID = idx;
          quizJSON.newQuestions[questionID]["choices"][choiceID] = {}
          quizJSON.newQuestions[questionID]["choices"][choiceID]["choiceText"] = $(choice).val();

          var isAnswer = $(this).prev()[0].checked

          if (isAnswer) {
            quizJSON.newQuestions[questionID]["choices"][choiceID]["answer"] = true;
          } else {
            quizJSON.newQuestions[questionID]["choices"][choiceID]["answer"] = false;
          }
        });

      });

      return quizJSON
    },

    ID: function() {
      return $('.quiz-title').attr('data-quiz-id');
    }
  }
})();

