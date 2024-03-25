class CreateMovies < ActiveRecord::Migration[7.1]
  def change
    create_table :movies, id: :uuid do |t|
      t.string :title, limit: 100
      t.string :description, limit: 1000
      t.string :gender, limit: 50
      t.string :duration, limit: 30
      t.integer :movie_rating
      t.string :status_movie, limit: 30

      t.timestamps
    end
  end
end
