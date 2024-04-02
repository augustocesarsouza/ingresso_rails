class AdditionalInfoUser < ApplicationRecord
  belongs_to :user

  # validates :user_id, presence: true
  validates :user_id, presence: true
end
