module Admin
  class RegionsController < BaseController
    before_action :set_region, only: %i[ show edit update destroy ]

    def index
      @regions = Region.all
    end

    def show; end

    def new
      @region = Region.new
    end

    def edit; end

    def create
      @region = Region.new(region_params)

      if @region.save
        redirect_to admin_regions_path, notice: 'Movie was successfully created.'
      else
        render :new, status: :unprocessable_entity
      end
    end

    def update
      if @region.update(region_params)
        redirect_to admin_regions_path, notice: 'Movie was successfully updated.'
      else
        render :edit, status: :unprocessable_entity
      end
    end

    def destroy
      @region.destroy!

      respond_to do |format|
        format.html { redirect_to regions_url, notice: 'Region was successfully destroyed.' }
        format.json { head :no_content }
      end
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_region
      @region = Region.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def region_params
      params.require(:region).permit(:state, :city)
    end
  end
end