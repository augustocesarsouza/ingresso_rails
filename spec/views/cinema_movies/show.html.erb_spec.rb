require 'rails_helper'

RSpec.describe "cinema_movies/show", type: :view do
  before(:each) do
    assign(:cinema_movie, CinemaMovie.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
