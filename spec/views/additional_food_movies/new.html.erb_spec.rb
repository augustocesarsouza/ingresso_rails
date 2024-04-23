require 'rails_helper'

RSpec.describe "additional_food_movies/new", type: :view do
  before(:each) do
    assign(:additional_food_movie, AdditionalFoodMovie.new())
  end

  it "renders new additional_food_movie form" do
    render

    assert_select "form[action=?][method=?]", additional_food_movies_path, "post" do
    end
  end
end
