class CreateCars < ActiveRecord::Migration[5.0]
  def change
    create_table :cars do |t|
      t.string :make, null: false
      t.string :model, null: false
      t.integer :year, null: false
      t.integer :mileage, null: false
      t.integer :price, null: false
      t.timestamps
    end
  end
end
