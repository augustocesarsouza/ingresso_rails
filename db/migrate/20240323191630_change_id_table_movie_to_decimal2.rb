class ChangeIdTableMovieToDecimal2 < ActiveRecord::Migration[7.1]
  def change
    add_column :movies, :uuid, :decimal, primary_key: true

    change_table :movies do |t|
      t.remove :id
      t.rename :uuid, :id
    end
  end
end
