require 'rails_helper'

RSpec.describe "movie_theaters/index", type: :view do
  before(:each) do
    assign(:movie_theaters, [
      MovieTheater.create!(
        movie_id: "",
        region_id: ""
      ),
      MovieTheater.create!(
        movie_id: "",
        region_id: ""
      )
    ])
  end

  it "renders a list of movie_theaters" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("".to_s), count: 2
  end
end
