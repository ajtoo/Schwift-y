class Api::CarsController < ApplicationController
  def index
    if params[:search]
      searchTags = params[:search][:tags]
      location = params[:search][:location]
      p "TAGS:"
      p searchTags
      p"LOCATION"
      p location
      @cars = getCarsWithParams(searchTags, location)
    else
      @cars = Car.all
    end
  end

  def show
    @car = Car.find(params[:id])
    render json: @car.to_json
  end

  private

  def getCarsWithParams(tags, location)
    whereInStr = composeWhereStr(tags) || ""
    #TODO: include location
    whereInStr.concat(" AND ") unless whereInStr.empty?
    queryStr = whereInStr + "cars.mileage <= #{tags[:maxMiles]}" + " AND cars.price <= #{tags[:maxPrice]}"
    queryStr.concat(" AND UPPER(cars.location) LIKE '#{location.upcase}'") unless location.empty?
    Car.find_by_sql([
      "
      SELECT 
        *
      FROM cars
      WHERE 
        #{queryStr}
      "
    ])
  end

  def composeWhereStr(tagObj)
    whereStr = ""

    tagObj.each do |key, tags|
      tagSetStr = getStringForQuery(tags) || ""   # sanity check in case tags somehow doesn't contain an array
      unless tagSetStr.empty? 
        whereStr.concat(" AND ").concat(getQueryFilter(key.to_s, tagSetStr))
      end
    end

    whereStr[5..-1]
  end

  def getQueryFilter(key, setStr)
    return "UPPER(cars.#{key.downcase}) IN (#{setStr})"
  end

  def getStringForQuery(tagArray)
    (tagArray.map {|item| "'" + item.upcase + "'"}).join(", ") if tagArray.is_a?(Array)
  end
end