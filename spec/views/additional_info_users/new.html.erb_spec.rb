require 'rails_helper'

RSpec.describe "additional_info_users/new", type: :view do
  before(:each) do
    assign(:additional_info_user, AdditionalInfoUser.new())
  end

  it "renders new additional_info_user form" do
    render

    assert_select "form[action=?][method=?]", additional_info_users_path, "post" do
    end
  end
end
