require 'rails_helper'

RSpec.describe "additional_info_users/edit", type: :view do
  let(:additional_info_user) {
    AdditionalInfoUser.create!()
  }

  before(:each) do
    assign(:additional_info_user, additional_info_user)
  end

  it "renders the edit additional_info_user form" do
    render

    assert_select "form[action=?][method=?]", additional_info_user_path(additional_info_user), "post" do
    end
  end
end
