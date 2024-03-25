require 'rails_helper'

RSpec.describe "movie_theaters/edit", type: :view do
  let(:movie_theater) {
    MovieTheater.create!(
      movie_id: "",
      region_id: ""
    )
  }

  before(:each) do
    assign(:movie_theater, movie_theater)
  end

  it "renders the edit movie_theater form" do
    render

    assert_select "form[action=?][method=?]", movie_theater_path(movie_theater), "post" do

      assert_select "input[name=?]", "movie_theater[movie_id]"

      assert_select "input[name=?]", "movie_theater[region_id]"
    end
  end
end
