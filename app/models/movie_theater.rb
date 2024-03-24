class MovieTheater < ApplicationRecord
  belongs_to :movie
  belongs_to :region

  validates :state, :city, presence: true
end
