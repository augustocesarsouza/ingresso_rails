require 'rails_helper'

RSpec.describe "form_of_payments/show", type: :view do
  before(:each) do
    assign(:form_of_payment, FormOfPayment.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
