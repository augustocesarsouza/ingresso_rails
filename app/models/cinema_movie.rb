class CinemaMovie < ApplicationRecord
  belongs_to :movie
  belongs_to :cinema
  belongs_to :region

  validates :movie_id, :cinema_id, :region_id, :screening_schedule, presence: true
end