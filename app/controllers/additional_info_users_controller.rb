class AdditionalInfoUsersController < ApplicationController
  before_action :set_additional_info_user, only: %i[ show edit update destroy ]

  # GET /additional_info_users or /additional_info_users.json
  def index
    @additional_info_users = AdditionalInfoUser.all
  end

  # GET /additional_info_users/1 or /additional_info_users/1.json
  def show
  end

  # GET /additional_info_users/new
  def new
    @additional_info_user = AdditionalInfoUser.new
  end

  # GET /additional_info_users/1/edit
  def edit
  end

  # POST /additional_info_users or /additional_info_users.json
  def create
    @additional_info_user = AdditionalInfoUser.new(additional_info_user_params)

    respond_to do |format|
      if @additional_info_user.save
        format.html { redirect_to additional_info_user_url(@additional_info_user), notice: "Additional info user was successfully created." }
        format.json { render :show, status: :created, location: @additional_info_user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @additional_info_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /additional_info_users/1 or /additional_info_users/1.json
  def update
    respond_to do |format|
      if @additional_info_user.update(additional_info_user_params)
        format.html { redirect_to additional_info_user_url(@additional_info_user), notice: "Additional info user was successfully updated." }
        format.json { render :show, status: :ok, location: @additional_info_user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @additional_info_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /additional_info_users/1 or /additional_info_users/1.json
  def destroy
    @additional_info_user.destroy!

    respond_to do |format|
      format.html { redirect_to additional_info_users_url, notice: "Additional info user was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_additional_info_user
      @additional_info_user = AdditionalInfoUser.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def additional_info_user_params
      params.fetch(:additional_info_user, {})
    end
end
