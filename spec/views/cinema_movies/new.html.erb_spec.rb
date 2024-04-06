require 'rails_helper'

RSpec.describe "cinema_movies/new", type: :view do
  before(:each) do
    assign(:cinema_movie, CinemaMovie.new())
  end

  it "renders new cinema_movie form" do
    render

    assert_select "form[action=?][method=?]", cinema_movies_path, "post" do
    end
  end
end
