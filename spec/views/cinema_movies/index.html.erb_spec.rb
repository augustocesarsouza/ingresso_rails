require 'rails_helper'

RSpec.describe "cinema_movies/index", type: :view do
  before(:each) do
    assign(:cinema_movies, [
      CinemaMovie.create!(),
      CinemaMovie.create!()
    ])
  end

  it "renders a list of cinema_movies" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
  end
end
