class QuizzesController < ApplicationController
  before_filter :redirect_guests
  def index
  end

  def new
    @quiz = Quiz.new
  end

  def create
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end
end