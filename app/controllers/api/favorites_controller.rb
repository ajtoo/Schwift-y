class Api::FavoritesController < ApplicationController
  def create
    if Favorite.create(user_id: params[:user_id], car_id: params[:car_id])
      render json: {}, status: 200
    else
      render json: 204
    end
  end

  def show
    #weak logic due to the rush (I want to allow users to ping without params and get all the favs for a user)
    if params[:user_id] || params[:car_id]
      render json: Favorite.find_by(user_id: params[:user_id], car_id: params[:car_id]).to_json
    else
      render json: Favorite.where(user_id: params[:id]).map {|favorite| favorite.car}
    end
  end
  def destroy
    to_destroy = Favorite.find_by(user_id: params[:user_id], car_id: params[:car_id])
    Favorite.destroy(to_destroy.id)
    render json: {}.to_json
  end
end
