class AddImageToCarTable < ActiveRecord::Migration[5.0]
  def change
    add_column :cars, :img_url, :string, null: false
  end
end
