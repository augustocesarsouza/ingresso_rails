class CreateMovieTheater < ActiveRecord::Migration[7.1]
  def change
    create_table :movie_theaters, id: :uuid do |t|
      t.belongs_to :movie, null: false, foreign_key: true, type: :uuid
      t.belongs_to :region, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
