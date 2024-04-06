class ChangeColumnNotNullCinema < ActiveRecord::Migration[7.1]
  def change
    change_column_null :cinemas, :name_cinema, false
    change_column_null :cinemas, :district, false
    change_column_null :cinemas, :ranking, false
  end
end
