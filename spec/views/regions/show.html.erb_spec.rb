require 'rails_helper'

RSpec.describe "regions/show", type: :view do
  before(:each) do
    assign(:region, Region.create!(
      state: "State",
      city: "City"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/State/)
    expect(rendered).to match(/City/)
  end
end
