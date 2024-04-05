FactoryBot.define do
  factory :movie do
    title { Faker::Lorem.word }
    description { Faker::Lorem.sentence }
    gender { Faker::Gender.binary_type }
    duration { Faker::Number.between(from: 90, to: 180) }
    movie_rating { Faker::Number.between(from: 1, to: 10) }
    status_movie { ['Em Alta'].sample } # Highlight
  end
end

# validates :title, :description, :gender, :duration, :movie_rating, :status_movie, presence: true