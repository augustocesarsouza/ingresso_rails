class CreateTableCinemaMovie < ActiveRecord::Migration[7.1]
  def change
    create_table :cinema_movies, id: :uuid do |t|
      t.belongs_to :movie, null: false, foreign_key: true, type: :uuid
      t.belongs_to :cinema, null: false, foreign_key: true, type: :uuid
      t.belongs_to :region, null: false, foreign_key: true, type: :uuid
      t.string :screening_schedule, limit: 100, null: false

      t.timestamps
    end
  end
end
