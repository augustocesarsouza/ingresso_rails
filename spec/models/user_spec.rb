require 'rails_helper'

RSpec.describe User, type: :model do
  context 'Should valid the fields required' do
    it 'Checks if the fields are present' do
      user = build(:user)

      expect(user.valid?).to be_truthy
    end

    it 'Checks if the field name is not present' do
      user = build(:user, name: nil)

      expect(user.valid?).to be_falsey
    end

    it 'Checks if the field cpf is not present' do
      user = build(:user, cpf: nil)

      expect(user.valid?).to be_falsey
    end

    it 'Checks if the field email is not present' do
      user = build(:user, email: nil)

      expect(user.valid?).to be_falsey
    end
  end

  context 'validate email' do
    it 'Checks if the field email is unique' do
      user1 = create(:user)
      user2 = build(:user, email: user1.email)

      user2.save

      expect(user2.valid?).to be_falsey
    end

    it 'Checks if the field email is unique' do
      user1 = create(:user)
      user2 = build(:user, email: user1.email)

      user2.save

      expect(user2.valid?).to be_falsey
      # expect(user2.errors.size).to be_positive / be_negative
    end

    it 'Validate error message for and unique email' do
      user1 = create(:user)
      user2 = build(:user, email: user1.email)

      user2.save

      # expect(user2.valid?).to be_falsey
      expect(user2.errors.size).to be_positive
    end
  end
end
