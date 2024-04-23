class CreateTableAdditionalFoodMovie < ActiveRecord::Migration[7.1]
  def change
    create_table :additional_food_movies, id: :uuid do |t|
      t.string :title, limit: 100, null: false
      t.string :price, limit: 70, null: false
      t.string :fee, limit: 60, null: false
      t.belongs_to :movie, null: false, foreign_key: true, type: :uuid
      t.belongs_to :cinema, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
