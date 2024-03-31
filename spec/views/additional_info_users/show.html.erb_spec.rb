require 'rails_helper'

RSpec.describe "additional_info_users/show", type: :view do
  before(:each) do
    assign(:additional_info_user, AdditionalInfoUser.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
