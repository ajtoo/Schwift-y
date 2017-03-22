class AddFilterColumnsToCarTable < ActiveRecord::Migration[5.0]
  def change
    add_column :cars, :body, :string, null: false
    add_column :cars, :drivetrain, :string, null: false
    add_column :cars, :transmission, :string, null: false
  end
end
