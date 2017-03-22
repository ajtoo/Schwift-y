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

  private
  def getCarsWithParams(tags, location)
    whereStr = composeWhereStr(tags)
    #TODO: include location and max values
    if whereStr && !whereStr.empty?
      Car.find_by_sql([
        "
        SELECT 
          *
        FROM cars
        WHERE 
          #{whereStr}
        "
      ])
    else
      Car.all
    end
  end



  private

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
#  getStringForQuery(["asdf", "GOGOGO"])