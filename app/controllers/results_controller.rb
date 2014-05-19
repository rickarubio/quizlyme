class ResultsController < ApplicationController
  before_filter :redirect_guests

  def index
  end

  def create
    p params
    binding.pry();
    params[:userResponse][:questionIDs].each do |question|
      p question_id = question.first.to_i
      p user_choice_id = question.last[:choiceID].to_i
    end
    respond_to do |format|
      format.json { render json: {msg: "success"} }
    end
  end
end