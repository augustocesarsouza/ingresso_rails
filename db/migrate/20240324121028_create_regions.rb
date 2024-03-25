class CreateRegions < ActiveRecord::Migration[7.1]
  def change
    create_table :regions do |t|
      t.string :state, limit: 70, null: false
      t.string :city, limit: 70, null: false

      t.timestamps
    end
  end
end
