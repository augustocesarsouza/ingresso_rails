class Region < ApplicationRecord
  has_many :movie_theater

  validates :state, :city, presence: true
end
