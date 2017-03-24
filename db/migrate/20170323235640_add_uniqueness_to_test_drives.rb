class AddUniquenessToTestDrives < ActiveRecord::Migration[5.0]
  def change
    add_index :test_drives, [:user_id, :car_id], unique: true
  end
end
