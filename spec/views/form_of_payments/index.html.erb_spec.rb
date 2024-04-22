require 'rails_helper'

RSpec.describe "form_of_payments/index", type: :view do
  before(:each) do
    assign(:form_of_payments, [
      FormOfPayment.create!(),
      FormOfPayment.create!()
    ])
  end

  it "renders a list of form_of_payments" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
  end
end
