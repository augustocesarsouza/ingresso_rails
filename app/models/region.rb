class Region < ApplicationRecord

  validates :state, :city, presence: true
end
