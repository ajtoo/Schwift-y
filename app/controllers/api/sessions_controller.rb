class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    p @user
    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Invalid Credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    p "----"
    p current_user 
    p User.first
    p"----"
    if @user
      logout!
      render json: {}
    else
      render json: ["No user logged in"], status: 404
    end
  end
end
