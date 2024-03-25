module Admin
  class MovieTheatersController < BaseController
    before_action :set_movie_theater, only: %i[ show edit update destroy ]

    def index
      @movie_theaters = MovieTheater.all
    end

    def show; end

    def new
      authorize MovieTheater

      @movie_theater = MovieTheater.new
    end

    def edit; end

    def create
      movie_result = Movie.select(:id).where(title: movie_theater_params[:movie]).first
      region_result = Region.select(:id).where(city: movie_theater_params[:city]).first

      if movie_result.nil? || region_result.nil?
        @movie_theater = MovieTheater.new
        @movie_theater.errors.add(:base, 'Error when creating Junction, name of the movie, or region name not exist')
        render :new
        return
      end

      @movie_theater = MovieTheater.new(movie_id: movie_result.id, region_id: region_result.id)
      puts @movie_theater.inspect

      if @movie_theater.save
        redirect_to admin_movie_theaters_path, notice: 'Movie theater was successfully created.'
      else
        render :new, status: :unprocessable_entity
      end
    end

    def update
      if @movie_theater.update(region_params)
        redirect_to admin_movie_theaters_path, notice: 'Movie theater was successfully updated.'
      else
        render :edit, status: :unprocessable_entity
      end
    end

    def destroy
      @movie_theater.destroy!

      respond_to do |format|
        format.html { redirect_to movie_theaters_url, notice: 'Movie theater was successfully destroyed.' }
        format.json { head :no_content }
      end
    end

    private

    def set_movie_theater
      @movie_theater = MovieTheater.find(params[:id])
    end

    def movie_theater_params
      params.require(:movie_theater).permit(:movie, :city)
    end
  end
end
