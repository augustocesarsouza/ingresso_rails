class CreateCinemaMovies < ActiveRecord::Migration[7.1]
  def change
    create_table :cinema_movies do |t|

      t.timestamps
    end
  end
end
