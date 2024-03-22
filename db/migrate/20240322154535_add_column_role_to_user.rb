class AddColumnRoleToUser < ActiveRecord::Migration[7.1]
  def change
    create_enum :role_user, ['user', 'admin'] # esses enum é do postgresql

    change_table :users do |t|
      t.enum :role, enum_type: 'role_user', default: 'user', null: false
    end
  end
end
