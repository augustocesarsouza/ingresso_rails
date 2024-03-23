class Movie < ApplicationRecord
  validates :title, :description, :gender, :duration, :movie_rating, :status_movie, presence: true

  has_one_attached :img_url
  has_one_attached :img_url_background
end
