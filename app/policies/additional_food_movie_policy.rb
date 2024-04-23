class AdditionalFoodMoviePolicy < ApplicationPolicy
  def new?
    Movie.count.positive? && Cinema.count.positive?
  end
end
