module Admin
  class MovieTheatersController < BaseController
    before_action :set_movie_theater, only: %i[ show edit update destroy ]

    def index
      @movie_theaters = MovieTheater.all
    end

    def show; end

    def new
      @movie_theater = MovieTheater.new
    end

    def edit; end

    def create
      @region = Region.new(movie_theater_params)

      if @region.save
        redirect_to admin_movie_theaters_path, notice: 'Movie theater was successfully created.'
      else
        render :new, status: :unprocessable_entity
      end
    end

    def update
      if @region.update(region_params)
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
      params.require(:movie_theater).permit(:movie_id, :region_id)
    end
  end
end
