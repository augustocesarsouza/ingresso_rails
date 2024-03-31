class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :name, :cpf, presence: true

  has_one_attached :avatar

  has_one :additional_info_user, dependent: :destroy

  enum role: { user: 'user', admin: 'admin'}
end
