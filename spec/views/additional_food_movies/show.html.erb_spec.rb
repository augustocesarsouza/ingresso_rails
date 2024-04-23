require 'rails_helper'

RSpec.describe "additional_food_movies/show", type: :view do
  before(:each) do
    assign(:additional_food_movie, AdditionalFoodMovie.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
