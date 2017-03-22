class Favorite < ApplicationRecord
  validates :car_id, :user_id, presence: true
end
