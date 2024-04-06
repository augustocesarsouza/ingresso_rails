require 'rails_helper'

RSpec.describe "cinemas/new", type: :view do
  before(:each) do
    assign(:cinema, Cinema.new())
  end

  it "renders new cinema form" do
    render

    assert_select "form[action=?][method=?]", cinemas_path, "post" do
    end
  end
end
