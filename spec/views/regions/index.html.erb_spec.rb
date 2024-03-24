require 'rails_helper'

RSpec.describe "regions/index", type: :view do
  before(:each) do
    assign(:regions, [
      Region.create!(
        state: "State",
        city: "City"
      ),
      Region.create!(
        state: "State",
        city: "City"
      )
    ])
  end

  it "renders a list of regions" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("State".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("City".to_s), count: 2
  end
end
