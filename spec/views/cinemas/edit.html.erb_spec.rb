require 'rails_helper'

RSpec.describe "cinemas/edit", type: :view do
  let(:cinema) {
    Cinema.create!()
  }

  before(:each) do
    assign(:cinema, cinema)
  end

  it "renders the edit cinema form" do
    render

    assert_select "form[action=?][method=?]", cinema_path(cinema), "post" do
    end
  end
end
