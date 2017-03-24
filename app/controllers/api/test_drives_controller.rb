class Api::TestDrivesController < ApplicationController
  def show
    #takes user id as the "id"
    if params[:id]
      render json: TestDrive.where(user_id: params[:id]).map {|td| {info: td, car: td.car}}
    else
      render status: 404
    end
  end

  def create
    td = TestDrive.new(
          date: Date.strptime(params[:info][:date], "%m/%d/%Y"),
          phone_number: params[:info][:phone_number],
          location: params[:info][:location], 
          user_id: params[:info][:user_id],
          car_id: params[:info][:car_id]
        )
    if td.save
      render json: {info: td, car: td.car}, status: 202
    else
      render json: {}, status: 422
    end
  end

  def destroy
    test_drive = TestDrive.find_by(car_id: params[:id], user_id: params[:user_id])
    if test_drive
      if test_drive.destroy()
        render json: test_drive.to_json, status: 200
      else
        render json: {}, status: 202
      end
    else
      render json: {}, status: 204
    end
  end
end
