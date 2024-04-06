class CinemaMovie < ApplicationRecord

  validates :movie_id, :cinema_id, :region_id, :screening_schedule, presence: true
end