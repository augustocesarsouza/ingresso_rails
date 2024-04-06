class Cinema < ApplicationRecord
  has_many :cinema_movie, dependent: :destroy

  validates :name_cinema, :district, :ranking, presence: true
end