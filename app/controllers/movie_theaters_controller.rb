class MovieTheatersController < ApplicationController
  before_action :set_movie_theater, only: %i[ show edit update destroy ]

  # GET /movie_theaters or /movie_theaters.json
  def index
    @movie_theaters = MovieTheater.all
  end

  # GET /movie_theaters/1 or /movie_theaters/1.json
  def show
  end

  # GET /movie_theaters/new
  def new
    @movie_theater = MovieTheater.new
  end

  # GET /movie_theaters/1/edit
  def edit
  end

  # POST /movie_theaters or /movie_theaters.json
  def create
    @movie_theater = MovieTheater.new(movie_theater_params)

    respond_to do |format|
      if @movie_theater.save
        format.html { redirect_to movie_theater_url(@movie_theater), notice: "Movie theater was successfully created." }
        format.json { render :show, status: :created, location: @movie_theater }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @movie_theater.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /movie_theaters/1 or /movie_theaters/1.json
  def update
    respond_to do |format|
      if @movie_theater.update(movie_theater_params)
        format.html { redirect_to movie_theater_url(@movie_theater), notice: "Movie theater was successfully updated." }
        format.json { render :show, status: :ok, location: @movie_theater }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @movie_theater.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /movie_theaters/1 or /movie_theaters/1.json
  def destroy
    @movie_theater.destroy!

    respond_to do |format|
      format.html { redirect_to movie_theaters_url, notice: "Movie theater was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_movie_theater
      @movie_theater = MovieTheater.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def movie_theater_params
      params.require(:movie_theater).permit(:movie_id, :region_id)
    end
end
