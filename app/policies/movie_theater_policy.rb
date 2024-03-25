class MovieTheaterPolicy < ApplicationPolicy
  def new?
    Movie.count.positive? && Region.count.positive?
  end
end
