class CreateTestDrives < ActiveRecord::Migration[5.0]
  def change
    create_table :test_drives do |t|
      t.date :date, null: false
      t.string :phone_number, null: false
      t.string :location, null: false
      t.timestamps
    end
  end
end
