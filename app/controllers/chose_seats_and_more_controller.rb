class ChoseSeatsAndMoreController < ApplicationController
  def index
    movie_id = params[:id]
    puts '****************************************************************'
    @movie = Movie.select(:id, :title, :movie_rating).where(id: movie_id).first
    puts @movie.inspect
  end
end
