class SessionsController < ApplicationController
  def new
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

  def create
    @user = User.authenticate(params[:username], params[:password])

    if @user
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      render "new"
    end
  end
end