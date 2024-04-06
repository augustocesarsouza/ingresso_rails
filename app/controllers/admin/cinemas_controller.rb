module Admin
  class CinemasController < BaseController
    before_action :set_cinema, only: %i[ show edit update destroy ]
  
    # GET /cinemas or /cinemas.json
    def index
      @cinemas = Cinema.all
    end
  
    # GET /cinemas/1 or /cinemas/1.json
    def show
    end
  
    # GET /cinemas/new
    def new
      @cinema = Cinema.new
    end
  
    # GET /cinemas/1/edit
    def edit
    end
  
    # POST /cinemas or /cinemas.json
    def create
      @cinema = Cinema.new(cinema_params)
      
      if @cinema.save
        redirect_to admin_cinemas_path, notice: 'Cinema was successfully created.'
      else
        render :new, status: :unprocessable_entity
      end
    end

    def update
      if @cinema.update(movie_params)
        redirect_to admin_cinemas_path, notice: 'Cinema was successfully updated.'
      else
        render :edit, status: :unprocessable_entity
      end
    end

    def destroy
      @cinema.destroy!

      respond_to do |format|
        format.html { redirect_to admin_cinemas_path, notice: 'Cinema was delete successfully' }
      end
    end
  
    private
      def set_cinema
        @cinema = Cinema.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.

      def cinema_params
        params.require(:cinema).permit(:name_cinema, :district, :ranking)
      end
  end
end