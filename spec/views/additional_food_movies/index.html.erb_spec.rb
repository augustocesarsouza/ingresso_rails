require 'rails_helper'

RSpec.describe "additional_food_movies/index", type: :view do
  before(:each) do
    assign(:additional_food_movies, [
      AdditionalFoodMovie.create!(),
      AdditionalFoodMovie.create!()
    ])
  end

  it "renders a list of additional_food_movies" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
  end
end
