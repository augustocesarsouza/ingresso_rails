class HomeController < ApplicationController
  def index
    movie_theaters = MovieTheater.where(region_id: 'bf13a562-d55a-4e2b-bb0f-1c880b850f2b')
    movie_ids = movie_theaters.pluck(:movie_id) # aqui pega todos os movie_id que volta de 'movie_theaters'

    @movies = Movie.select(:id, :title).joins(:movie_theater).where(movie_theaters: { movie_id: movie_ids }) #faz select aqui
    # aqui faz um join com a tabela 'movie_theater' e passa todos os 'movie_ids' para faz um get de uma vez só
    @movie_highlight = Movie.select(:id, :title, :description).where(status_movie: 'Highlight').first
    # da para trocar esse 'status_movie' para uma role, que tenha os tipos que eu quero 'Highlight' 'em alta'

    # render 'index'
  end
end
