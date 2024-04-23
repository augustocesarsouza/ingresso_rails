module Admin
  class AdditionalFoodMoviesController < BaseController
    before_action :set_additional_food_movie, only: %i[ show edit update destroy ]
  
    def index
      @additional_food_movies = AdditionalFoodMovie.all
    end
  
    def show; end
  
    def new
      authorize AdditionalFoodMovie

      @additional_food_movie = AdditionalFoodMovie.new
    end
  
    def edit; end

    def create
      @additional_food_movie = AdditionalFoodMovie.new(additional_food_movie_params)

      tempfile_name = additional_food_movie_params[:image_main].tempfile

      file_content = File.open(tempfile_name, 'rb')

      @additional_food_movie.create_img_cloudinary_main(file_content, @additional_food_movie.image_main, 106, 88)

      if @additional_food_movie.save
        redirect_to admin_additional_food_movies_path, notice: 'Additional was successfully created.'
      else
        render :new, status: :unprocessable_entity
      end
    end

    def update
      if @additional_food_movie.update(additional_food_movie_params)
        redirect_to admin_additional_food_movies_path, notice: 'Additional was successfully updated.'
      else
        render :edit, status: :unprocessable_entity
      end
    end

    def destroy
      @additional_food_movie.destroy!

      respond_to do |format|
        format.html { redirect_to admin_additional_food_movies_path, notice: 'Additional was delete successfully' }
      end
    end
  
    private
      def set_additional_food_movie
        @additional_food_movie = AdditionalFoodMovie.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def additional_food_movie_params
        params.require(:additional_food_movie).permit(:title, :image_main, :price, :fee, :movie_id, :cinema_id)
      end
  end
end