class ChoseMovieTheaterController < ApplicationController
  def index
    movie_id = params[:id]
    @movie = Movie.select(:id, :title, :gender, :duration, :movie_rating, :description).where(id: movie_id).first
    print '****************************************************************'
    print @movie.inspect
    print '****************************************************************'
  end

  def show
  end
end
