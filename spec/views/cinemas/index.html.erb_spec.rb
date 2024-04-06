require 'rails_helper'

RSpec.describe "cinemas/index", type: :view do
  before(:each) do
    assign(:cinemas, [
      Cinema.create!(),
      Cinema.create!()
    ])
  end

  it "renders a list of cinemas" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
  end
end
