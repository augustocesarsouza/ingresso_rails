require 'rails_helper'

RSpec.describe "form_of_payments/edit", type: :view do
  let(:form_of_payment) {
    FormOfPayment.create!()
  }

  before(:each) do
    assign(:form_of_payment, form_of_payment)
  end

  it "renders the edit form_of_payment form" do
    render

    assert_select "form[action=?][method=?]", form_of_payment_path(form_of_payment), "post" do
    end
  end
end
