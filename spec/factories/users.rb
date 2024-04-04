require 'faker'

FactoryBot.define do
  factory :user do
    name = Faker::Lorem.word
    cpf = Faker::Lorem.sentence
    email = Faker::Gender.binary_type
  end
end
# validates :name, :cpf, :email, presence: true
