module Admin
  class MoviesController < BaseController
    before_action :set_category, only: %i[ show edit update destroy]

    def index
      @movies = Movie.all
    end

    def show; end

    def new
      @movie = Movie.new
    end

    def edit; end

    def create
      @movie = Movie.new(movie_params)

      tempfile_name = movie_params[:images].tempfile

      file_content1 = File.open(tempfile_name, 'rb')
      file_content2 = File.open(tempfile_name, 'rb')

      @movie.create_img_cloudinary(file_content1, @movie.image_main, 625, 919)
      @movie.create_img_cloudinary(file_content2, @movie.image_background, 1400, 500)

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
      params.require(:movie).permit(:title, :images, :description, :gender, :duration, :movie_rating, :status_movie)
    end
  end
end
