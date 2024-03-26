class HomeController < ApplicationController
  def index
    movie_theaters = MovieTheater.where(region_id: 'bf13a562-d55a-4e2b-bb0f-1c880b850f2b')
    movie_ids = movie_theaters.pluck(:movie_id) # aqui pega todos os movie_id que volta de 'movie_theaters'
    puts
    @movies = Movie.select(:id, :title).joins(:movie_theater).where(movie_theaters: { movie_id: movie_ids }) #faz select aqui
    # aqui faz um join com a tabela 'movie_theater' e passa todos os 'movie_ids' para faz um get de uma vez só
    
    # movies.each do |m|
    #   puts m.inspect
    # end
  end
end

# create_table "movies", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
#   t.string "title", limit: 100, null: false
#   t.string "description", limit: 1000, null: false
#   t.string "gender", limit: 100, null: false
#   t.string "duration", limit: 30, null: false
#   t.integer "movie_rating", null: false
#   t.string "status_movie", limit: 30, null: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end