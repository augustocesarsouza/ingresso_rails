class ChangeIdTableMovieToDecimal6 < ActiveRecord::Migration[7.1]
  def change
    change_table :movies do |t|
      t.remove :id
    end

    add_column :movies, :id, :uuid, default: -> { "gen_random_uuid()" }, primary_key: true
  end
end
