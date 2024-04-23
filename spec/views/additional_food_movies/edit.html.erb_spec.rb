require 'rails_helper'

RSpec.describe "additional_food_movies/edit", type: :view do
  let(:additional_food_movie) {
    AdditionalFoodMovie.create!()
  }

  before(:each) do
    assign(:additional_food_movie, additional_food_movie)
  end

  it "renders the edit additional_food_movie form" do
    render

    assert_select "form[action=?][method=?]", additional_food_movie_path(additional_food_movie), "post" do
    end
  end
end
