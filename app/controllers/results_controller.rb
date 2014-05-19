class ResultsController < ApplicationController
  before_filter :redirect_guests

  def index
    @user = current_user
    @results = @user.results
  end

  def show
    @user = current_user
    @result = Result.where(id: params[:id], user_id: @user.id).first
    @quiz = Quiz.find @result.quiz_id
    @questions = @quiz.questions
  end

  def create
    @questions_and_selections = {}
    @quiz = Quiz.find params[:userResponse][:quizID].to_i

    params[:userResponse][:questionIDs].each do |question|
      question_id = question.first.to_i
      user_choice_id = question.last[:choiceID].to_i
      @questions_and_selections[question_id] = user_choice_id
    end

    num_correct_selections = 0
    total_quiz_questions = @quiz.questions.count
    user_responses = []

    @questions_and_selections.each do |question, selection|
      question = Question.find(question)
      selection = Choice.find(selection)
      correct_answer = question.choices.where(answer: true).first
      user_was_correct = selection.eql?(correct_answer)
      num_correct_selections += 1 if user_was_correct

      user_responses << UserResponse.create(
        result_id: -1,
        quiz_id: @quiz.id,
        question_id: question.id,
        choice_id: selection.id,
        correct: user_was_correct)
    end

    score = num_correct_selections.to_f / total_quiz_questions

    result = Result.create(
      user_id: current_user.id,
      quiz_id: @quiz.id,
      score: score)

    user_responses.each { |user_response| user_response.update_attributes(result_id: result.id) }

    respond_to do |format|
      format.json { render json: {msg: "success"} }
    end
  end
end