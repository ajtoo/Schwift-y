class TestDrive < ApplicationRecord
  validates :date, :location, :phone_number, :car_id, :user_id, presence: true

  belongs_to :car
  
  belongs_to :user
end
