class Favorite < ApplicationRecord
  validates :car_id, :user_id, presence: true
  validates :user_id, uniqueness: { scope: :car_id }

  belongs_to :user
  belongs_to :car
end
