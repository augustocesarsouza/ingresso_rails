module Admin
  class FormOfPaymentsController < BaseController
    before_action :set_form_of_payment, only: %i[ show edit update destroy ]
  
    def index
      @form_of_payments = FormOfPayment.all
    end
  
    def show;end
  
    def new
      authorize FormOfPayment
  
      @form_of_payment = FormOfPayment.new
    end
  
    def edit; end
  
    def create
      @form_of_payment = FormOfPayment.new(form_of_payment_params)
      
      if @form_of_payment.save
        redirect_to admin_form_of_payments_path, notice: 'FormOfPayment was successfully created.'
      else
        render :new, status: :unprocessable_entity
      end
    end
  
    def update
      if @form_of_payment.update(form_of_payment_params)
        redirect_to admin_form_of_payments_path, notice: 'FormOfPayment was successfully updated.'
      else
        render :edit, status: :unprocessable_entity
      end
    end
  
    def destroy
      @form_of_payment.destroy!
  
      respond_to do |format|
        format.html { redirect_to admin_form_of_payments_path, notice: 'FormOfPayment was delete successfully' }
      end
    end
  
    private
      def set_form_of_payment
        @form_of_payment = FormOfPayment.find(params[:id])
      end
  
      def form_of_payment_params
        params.require(:form_of_payment).permit(:form_name, :price, :movie_id, :cinema_id)
      end
  end  
end
