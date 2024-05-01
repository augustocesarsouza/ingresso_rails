class ChangeRoomToNotNullOnCinemaMovies < ActiveRecord::Migration[7.1]
  def change
    change_column :cinema_movies, :room, :integer, null: false
  end
end
