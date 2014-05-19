$(document).ready(function() {
  examination.isExamination();
});

var examination = (function() {
  return {
    isExamination: function() {
      if (document.location.pathname.match("/examination/")) {
        examination.markUserSelection();
        examination.listenOnSubmit();
      }
    },
    markUserSelection: function() {
      $('.examination-choice').on('click', function() {
        // visually mark the user's selected answer choice
        var selectedChoice = $(this);

        selectedChoice.attr('class', 'list-group-item examination-choice selected-answer')

        selectedChoice.parent().children().each(function(idx, choice) {
          if (!$(choice).is(selectedChoice)) {
            $(choice).attr('class', 'list-group-item examination-choice');
          }
        });

      })
    },

    listenOnSubmit: function() {
      $('.submit-examination').on('click', function(e) {
        e.preventDefault();
        var userResponses = examination.collectUserResponses();
        $.ajax({
          type: "POST",
          url: "/results",
          data: { userResponse: userResponses }
        }).done(function() {
          window.location = "/results"
        }).fail(function() {
          console.log("failed to submitted quiz results for processing");
        });
      })
    },

    collectUserResponses: function() {
      var quizID = $('h1').data('quiz-id');
      var userResponse = {
        "questionIDs": {}, 
        "quizID": quizID      
      }

      $('.question-list').each(function(idx, question) {
        var questionID = $(question).data('question-id');
        var choiceID = $(question).find('.selected-answer').data('choice-id');
        userResponse["questionIDs"][questionID] = {"choiceID": choiceID}
      });
      return userResponse
    }
  }
})();