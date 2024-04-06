module Admin
  class CinemaMoviesController < BaseController
    before_action :set_cinema_movie, only: %i[ show edit update destroy ]
  
    # GET /cinema_movies or /cinema_movies.json
    def index
      @cinema_movies = CinemaMovie.all
    end
  
    # GET /cinema_movies/1 or /cinema_movies/1.json
    def show
    end
  
    # GET /cinema_movies/new
    def new
      @cinema_movie = CinemaMovie.new
    end
  
    # GET /cinema_movies/1/edit
    def edit
    end

    def create
      @cinema_movie = CinemaMovie.new(cinema_movie_params)
      
      if @cinema_movie.save
        redirect_to admin_cinema_movies_path, notice: 'Cinema Movie was successfully created.'
      else
        render :new, status: :unprocessable_entity
      end
    end

    def update
      if @cinema_movie.update(cinema_movie_params)
        redirect_to admin_cinema_movies_path, notice: 'Cinema Movie was successfully updated.'
      else
        render :edit, status: :unprocessable_entity
      end
    end

    def destroy
      @cinema_movie.destroy!

      respond_to do |format|
        format.html { redirect_to admin_cinema_movies_path, notice: 'Cinema Movie was delete successfully' }
      end
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_cinema_movie
        @cinema_movie = CinemaMovie.find(params[:id])
      end
  
      def cinema_movie_params
        params.require(:cinema_movie).permit(:movie_id, :cinema_id, :region_id, :screening_schedule)
      end
  end
end

