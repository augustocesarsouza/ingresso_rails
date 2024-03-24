class ChangeIdTableUserToUuid < ActiveRecord::Migration[7.1]
  def change
    change_table :users do |t|
      t.remove :id
    end

    add_column :users, :id, :uuid, default: -> { "gen_random_uuid()" }, primary_key: true
  end
end
