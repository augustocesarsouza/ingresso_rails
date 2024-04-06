class ChoseMovieTheaterController < ApplicationController
  def index
    movie_id = params[:id]
    @movie = Movie.select(:id, :title, :gender, :duration, :movie_rating, :description).where(id: movie_id).first
    @cinemas = Cinema.select(:id, :name_cinema, :district, :ranking).all
    
  end
end


# create_table "cinemas", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
#   t.string "name_cinema", limit: 150, null: false
#   t.string "district", limit: 150, null: false
#   t.string "ranking", limit: 150, null: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end