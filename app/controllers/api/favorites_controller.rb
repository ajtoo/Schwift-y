class Api::FavoritesController < ApplicationController
  def create
    @bench = Bench.create(user_id: params[:user_id], car_id: params[:car_id])
    
  end

  def destroy
    @bench = Bench.destroy!(user_id: params[:user_id], car_id: params[:car_id])
  end
end
