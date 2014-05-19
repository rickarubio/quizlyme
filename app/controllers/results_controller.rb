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

    @questions_and_selections.each do |question, selection|
      question = Question.find(question)
      selection = Choice.find(selection)
      correct_answer = question.choices.where(answer: true).first
      num_correct_selections += 1 if selection.eql?(correct_answer)
    end

    score = num_correct_selections.to_f / total_quiz_questions

    Result.create(
      user_id: current_user.id,
      quiz_id: @quiz.id,
      score: score
    )

    respond_to do |format|
      format.json { render json: {msg: "success"} }
    end
  end
end