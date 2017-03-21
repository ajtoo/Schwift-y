class Api::CarsController < ApplicationController
  def index
    if params
      p "has params"
      @cars = Car.all
      p params
    else
      @cars = Car.all
    end
  end

  private
  def getCarsWithParams(tags)
  end
end
