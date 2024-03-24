class CreateMovieTheaters < ActiveRecord::Migration[7.1]
  def change
    create_table :movie_theaters, id: :uuid do |t|
      t.uuid :movie_id
      t.uuid :region_id

      t.timestamps
    end

    add_foreign_key :movie_theaters, :movies, column: :movie_id, type: :uuid
    add_foreign_key :movie_theaters, :regions, column: :region_id, type: :uuid
  end
end
