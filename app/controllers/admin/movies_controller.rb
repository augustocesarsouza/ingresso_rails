module Admin
  class MoviesController < BaseController
    before_action :set_category, only: %i[ show edit update destroy]

    def index
      @movies = Movie.all
    end

    def show
    end

    def new
      @movie = Movie.new
    end

    def edit
    end

    def create
      @movie = Movie.new(movie_params)

      if @movie.save
        redirect_to admin_movies_path, notice: 'Movie was successfully created.'
      else
        render :new, status: :unprocessable_entity
      end
    end

    def update
      if @movie.update(movie_params)
        redirect_to admin_movies_path, notice: 'Movie was successfully updated.'
      else
        render :edit, status: :unprocessable_entity
      end
    end

    def destroy
      @movie.destroy!

      respond_to do |format|
        format.html { redirect_to admin_movies_path, notice: 'Movie was delete successfully' }
      end
    end

    private

    def set_category
      @movie = Movie.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def movie_params
      params.require(:movie).permit(:title, :image, :description, :gender, :duration, :movie_rating, :status_movie)
    end
  end
end
