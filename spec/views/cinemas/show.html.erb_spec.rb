require 'rails_helper'

RSpec.describe "cinemas/show", type: :view do
  before(:each) do
    assign(:cinema, Cinema.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
