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
      redirect_to quiz_path(@quiz)
    else
      @quiz = Quiz.new
      render :new
    end
  end

  def show
    @quiz = Quiz.find_by_id(params[:id])
  end

  def edit
  end

  def update
  end

  def destroy
  end
end