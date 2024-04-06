class RenameColumnsInTableCinema < ActiveRecord::Migration[7.1]
  def change
    rename_column :cinemas, :NameCinema, :name_cinema
    rename_column :cinemas, :District, :district
    rename_column :cinemas, :Ranking, :ranking
  end
end
