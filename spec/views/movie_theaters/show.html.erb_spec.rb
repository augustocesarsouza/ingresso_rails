require 'rails_helper'

RSpec.describe "movie_theaters/show", type: :view do
  before(:each) do
    assign(:movie_theater, MovieTheater.create!(
      movie_id: "",
      region_id: ""
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
    expect(rendered).to match(//)
  end
end
