class Region < ApplicationRecord
  has_many :movie_theaters

  validates :state, :city, presence: true
end
