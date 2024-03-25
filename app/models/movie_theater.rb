class MovieTheater < ApplicationRecord
  belongs_to :movie
  belongs_to :region

  validates :movie_id, :region_id, presence: true
end
