class CreateTableCinema < ActiveRecord::Migration[7.1]
  def change
    create_table :cinemas, id: :uuid do |t|
      t.string :NameCinema, limit: 150
      t.string :District, limit: 150
      t.string :Ranking, limit: 150

      t.timestamps
    end
  end
end
