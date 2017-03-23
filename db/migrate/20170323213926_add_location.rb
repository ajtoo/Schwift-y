class AddLocation < ActiveRecord::Migration[5.0]
  def change
    add_column :cars, :location, :string, null: false
  end
end
