class Api::FavoritesController < ApplicationController
  def create
    if @favorite = Favorite.create(user_id: params[:user_id], car_id: params[:car_id])
      render json: {}, status: 200
    else
      render json: {}
    end
  end

  def show
      render json: Favorite.find_by(user_id: params[:user_id], car_id: params[:car_id]).to_json
  end
  def destroy
    to_destroy = Favorite.find_by(user_id: params[:user_id], car_id: params[:car_id])
    Favorite.destroy(to_destroy.id)
    render json: {}.to_json
  end
end
