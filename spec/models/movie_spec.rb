require 'rails_helper'

RSpec.describe Movie, type: :model do
  context 'Should valid the fields required' do
    it 'Checks if the fields are present' do
      movie = build(:movie)

      expect(movie.valid?).to be_truthy
    end

    it 'Checks if the field title is not present' do
      movie = build(:movie, title: nil)

      expect(movie.valid?).to be_falsey
    end

    it 'Checks if the field description is not present' do
      movie = build(:movie, description: nil)

      expect(movie.valid?).to be_falsey
    end

    it 'Checks if the field gender is not present' do
      movie = build(:movie, gender: nil)

      expect(movie.valid?).to be_falsey
    end

    it 'Checks if the field duration is not present' do
      movie = build(:movie, duration: nil)

      expect(movie.valid?).to be_falsey
    end

    it 'Checks if the field movie_rating is not present' do
      movie = build(:movie, movie_rating: nil)

      expect(movie.valid?).to be_falsey
    end

    it 'Checks if the field status_movie is not present' do
      movie = build(:movie, status_movie: nil)

      expect(movie.valid?).to be_falsey
    end
  end
end
