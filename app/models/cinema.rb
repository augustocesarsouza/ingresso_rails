class Cinema < ApplicationRecord

  validates :name_cinema, :district, :ranking, presence: true
end