class ChangePhoneNull < ActiveRecord::Migration[7.1]
  def change
    change_column_null :users, :phone, true
  end
end
