class Cinema < ApplicationRecord
  has_many :cinema_movie, dependent: :destroy
  has_many :form_of_payment, dependent: :destroy

  validates :name_cinema, :district, :ranking, presence: true
end