class ChangeIdRegion < ActiveRecord::Migration[7.1]
  def change
    change_table :regions do |t|
      t.remove :id
    end

    add_column :regions, :id, :uuid, default: -> { "gen_random_uuid()" }, primary_key: true
  end
end
