require 'rails_helper'

RSpec.describe "movie_theaters/new", type: :view do
  before(:each) do
    assign(:movie_theater, MovieTheater.new(
      movie_id: "",
      region_id: ""
    ))
  end

  it "renders new movie_theater form" do
    render

    assert_select "form[action=?][method=?]", movie_theaters_path, "post" do

      assert_select "input[name=?]", "movie_theater[movie_id]"

      assert_select "input[name=?]", "movie_theater[region_id]"
    end
  end
end
