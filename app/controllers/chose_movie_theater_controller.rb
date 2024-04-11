class ChoseMovieTheaterController < ApplicationController
  def index
    movie_id = params[:id]
    region_city_name = "Campinas";
    @movie = Movie.select(:id, :title, :gender, :duration, :movie_rating, :description).where(id: movie_id).first
    @region_city_id = Region.select(:id).where(city: region_city_name).first;
    @cinemas = Cinema.select(:id, :name_cinema, :district, :ranking).all
  end
end
