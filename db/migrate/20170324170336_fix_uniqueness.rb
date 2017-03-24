class FixUniqueness < ActiveRecord::Migration[5.0]
  def change
    remove_index :test_drives, [:user_id, :car_id]
  end
end
