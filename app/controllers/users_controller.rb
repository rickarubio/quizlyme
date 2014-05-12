class UsersController < ApplicationController
  def index
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      @user = User.new
      render :new
    end
  end

  def show
    @user = current_user
    @quizzes = @user.quizzes
    redirect_to root_path unless @user && (@user.id == params[:id].to_i)
  end

  def edit
  end

  def update
  end

  def destroy
  end
end