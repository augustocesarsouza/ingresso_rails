require 'rails_helper'

RSpec.describe "additional_info_users/index", type: :view do
  before(:each) do
    assign(:additional_info_users, [
      AdditionalInfoUser.create!(),
      AdditionalInfoUser.create!()
    ])
  end

  it "renders a list of additional_info_users" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
  end
end
