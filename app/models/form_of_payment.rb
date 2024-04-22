class FormOfPayment < ApplicationRecord
  belongs_to :movie
  belongs_to :cinema

  # attr_accessor :movie, :city

  validates :form_name, :price, :movie_id, :cinema_id, presence: true
end
