class RegistrationsController < Devise::RegistrationsController
  before_action :configure_permitted_parameters

  def new
    build_resource({})
    resource.build_additional_info_user
    respond_with self.resource
  end

  def create
    super do |resource|
      if resource.persisted?
        resource.additional_info_user.user_id = resource.id
        if resource.additional_info_user.save
          puts 'User and additional info created successfully.'
        else
          puts "Error creating additional info: #{resource.additional_info_user.errors.full_messages.join(', ')}"
        end
      else
        clean_up_passwords resource
        set_minimum_password_length
        puts "Error creating user: #{resource.errors.full_messages.join(', ')}"
      end
    end
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :email, :cpf, :password, :password_confirmation, additional_info_user_attributes: [:birth_date, :gender, :phone]])
    # devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :email, :cpf, :password, :password_confirmation])
  end
end