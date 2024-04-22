require 'rails_helper'

RSpec.describe "form_of_payments/new", type: :view do
  before(:each) do
    assign(:form_of_payment, FormOfPayment.new())
  end

  it "renders new form_of_payment form" do
    render

    assert_select "form[action=?][method=?]", form_of_payments_path, "post" do
    end
  end
end
