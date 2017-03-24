class AddIdColumnsToTestDrives < ActiveRecord::Migration[5.0]
  def change
    add_column :test_drives, :user_id, :integer, null: false
    add_column :test_drives, :car_id, :integer, null: false
  end
end
