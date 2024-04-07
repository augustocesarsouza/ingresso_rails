class ChoseMovieTheaterController < ApplicationController
  def index
    movie_id = params[:id]
    region_city_name = "Campinas";
    @movie = Movie.select(:id, :title, :gender, :duration, :movie_rating, :description).where(id: movie_id).first
    @region_city_id = Region.select(:id).where(city: region_city_name).first;
    @cinemas = Cinema.select(:id, :name_cinema, :district, :ranking).all

    # for cn in @cinemas
    #   # puts cn.id
    #   @cinemas_movies = CinemaMovie.select(:screening_schedule).where(movie_id: movie_id, cinema_id: cn.id, region_id: @region_city_id.id);
    #   puts
    #   puts '********************************************************************************************************************************'
    #   puts @cinemas_movies.count
    #   puts '********************************************************************************************************************************'
    # end
  end
end
