class QuizzesController < ApplicationController
  before_filter :redirect_guests

  def index
    @quizzes = Quiz.all
  end

  def new
    @quiz = Quiz.new
  end

  def create
    @quiz = Quiz.new(params[:quiz])
    if @quiz.save
      redirect_to edit_quiz_path(@quiz)
    else
      @quiz = Quiz.new
      render :new
    end
  end

  def show
    @quiz = Quiz.find_by_id(params[:id])
  end

  def edit
    @quiz = Quiz.find_by_id(params[:id])
  end

  def update

    quizID = params[:quizID].to_i
    new_questions = params[:newQuestions].keys

    new_questions.each do |q_num|
      questionText = params[:newQuestions][q_num][:questionText]
      question = Question.create(text: questionText, quiz_id: quizID)

      new_choices = params[:newQuestions][q_num][:choices].keys

      new_choices.each do |c_num|
        text = params[:newQuestions][q_num][:choices][c_num][:choiceText]
        answer = params[:newQuestions][q_num][:choices][c_num][:answer]
        Choice.create(text: text, answer: answer, question_id: question.id)
      end
    end

    respond_to do |format|
      format.json { render json: {msg: "quiz successfully updated"} }
    end
  end

  def destroy
  end
end