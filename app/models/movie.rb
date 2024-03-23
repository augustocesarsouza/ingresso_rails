class Movie < ApplicationRecord
  has_one_attached :image do |attachable|
    attachable.variant :img_main, resize_to_limit: [625, 919]
    attachable.variant :img_background, resize_to_limit: [1440, 500]
  end

  validates :title, :description, :gender, :duration, :movie_rating, :status_movie, presence: true
end
