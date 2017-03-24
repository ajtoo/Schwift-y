class TestDrive < ApplicationRecord
  validates :date, :location, :phone_number, :car_id, :user_id, presence: true
  validates :date, uniqueness: { scope: :car_id }
  
  belongs_to :car
  
  belongs_to :user
end
