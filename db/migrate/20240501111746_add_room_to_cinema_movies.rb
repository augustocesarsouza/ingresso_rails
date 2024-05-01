class AddRoomToCinemaMovies < ActiveRecord::Migration[7.1]
  def change
    add_column :cinema_movies, :room, :integer
  end
end
