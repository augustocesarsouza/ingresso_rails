class MovieTheater < ApplicationRecord
  belongs_to :movie
  belongs_to :region

  attr_accessor :movie, :city

  validates :movie_id, :region_id, presence: true
end
