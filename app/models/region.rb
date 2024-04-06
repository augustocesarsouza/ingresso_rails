class Region < ApplicationRecord
  has_many :movie_theater
  has_many :cinema_movie, dependent: :destroy


  validates :state, :city, presence: true
end
