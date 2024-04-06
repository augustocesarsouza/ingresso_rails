class Cinema < ApplicationRecord

  validates :NameCinema, :District, :Ranking, presence: true
end