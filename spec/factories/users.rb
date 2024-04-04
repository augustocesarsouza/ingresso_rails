require 'faker'

FactoryBot.define do
  factory :user do
    password = Faker::Number.number(digits: 10)
    name { Faker::Name.unique.name }
    password { password }
    password_confirmation { password }
    cpf { Faker::IDNumber.brazilian_citizen_number }
    email { Faker::Internet.unique.email }
  end
end
# validates :name, :cpf, :email, presence: true
