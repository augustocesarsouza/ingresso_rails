class AddColumnCpfTableUser < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :cpf, :string, null: false, default: ''
  end
end
