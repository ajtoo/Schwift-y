class AddUniquenessToFavs < ActiveRecord::Migration[5.0]
  def change
    add_index :favorites, [:user_id, :car_id], unique: true
  end
end
