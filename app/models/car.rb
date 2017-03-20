class Car < ApplicationRecord
  validates :make, :model, :year, :mileage, :price, :img_url, presence: true
end
