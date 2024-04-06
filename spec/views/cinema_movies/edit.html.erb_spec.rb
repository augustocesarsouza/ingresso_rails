require 'rails_helper'

RSpec.describe "cinema_movies/edit", type: :view do
  let(:cinema_movie) {
    CinemaMovie.create!()
  }

  before(:each) do
    assign(:cinema_movie, cinema_movie)
  end

  it "renders the edit cinema_movie form" do
    render

    assert_select "form[action=?][method=?]", cinema_movie_path(cinema_movie), "post" do
    end
  end
end
