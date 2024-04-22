class ChoseSeatsAndMoreController < ApplicationController
  def index
    movie_id = params[:id]
    cinema_id = params[:cinema_id]
    @movie = Movie.select(:id, :title, :movie_rating).where(id: movie_id).first
    @form_of_payments = FormOfPayment.select(:form_name, :price).where(movie_id: movie_id, cinema_id: cinema_id).all
    puts '****************************************************************'
    puts @form_of_payments.inspect
  end
end
