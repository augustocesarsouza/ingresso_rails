class CinemaMoviePolicy < ApplicationPolicy
  def new?
    Movie.count.positive? && Region.count.positive? && Cinema.count.positive?
  end
end
