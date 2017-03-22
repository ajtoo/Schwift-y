class Favorite < ApplicationRecord
  validates :car_id, :user_id, presence: true
  validates :user_id, uniqueness: { scope: :car_id }
end
