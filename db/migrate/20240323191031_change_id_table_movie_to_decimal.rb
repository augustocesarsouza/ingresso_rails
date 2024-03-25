class ChangeIdTableMovieToDecimal < ActiveRecord::Migration[7.1]
  def change
    add_column :movies, :uuid, :bigint

    change_table :movies do |t|
      t.remove :id
      t.rename :uuid, :id
    end
  end
end
