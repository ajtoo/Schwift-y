class AddUniquenessToTestDrives < ActiveRecord::Migration[5.0]
  def change
    add_index :test_drives, [:date, :car_id], unique: true
  end
end
