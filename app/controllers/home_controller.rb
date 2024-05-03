class HomeController < ApplicationController
  def index
    region_name = params[:region]
    region_obj = Region.select(:id).where(city: region_name).first
    region_id = "bf13a562-d55a-4e2b-bb0f-1c880b850f2b"

    if region_obj
      region_id = region_obj.id
    end

    movie_theaters = MovieTheater.where(region_id: region_id)
    movie_ids = movie_theaters.pluck(:movie_id) # aqui pega todos os movie_id que volta de 'movie_theaters'

    @movies = Movie.select(:id, :title).joins(:movie_theater).where(movie_theaters: { movie_id: movie_ids })
    @movie_highlight = Movie.select(:id, :title, :description, :movie_rating, :gender).where(status_movie: 'Highlight').first

    respond_to do |format|
      format.html # Renderizar normalmente para solicitações HTML
      format.js   # Renderizar um arquivo JavaScript para solicitações AJAX
    end
  end
end