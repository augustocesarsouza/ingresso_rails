require 'rails_helper'

RSpec.describe User, type: :model do
  context 'Should valid the fields required' do
    it 'Checks if the fields are present' do
      user = build(:user)

      expect(user.valid?).to be_truthy
    end
  end
end
