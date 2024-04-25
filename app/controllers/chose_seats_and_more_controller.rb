class ChoseSeatsAndMoreController < ApplicationController
  def index
    movie_id = params[:id]
    cinema_id = params[:cinema_id]
    @movie = Movie.select(:id, :title, :movie_rating).where(id: movie_id).first
    @form_of_payments = FormOfPayment.select(:form_name, :price).where(movie_id: movie_id, cinema_id: cinema_id).all
    @additional_food_movies = AdditionalFoodMovie.select(:id, :title, :price, :fee).where(movie_id: movie_id, cinema_id: cinema_id).all
  end
end
