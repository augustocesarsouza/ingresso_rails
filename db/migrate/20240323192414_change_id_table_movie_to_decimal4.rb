class ChangeIdTableMovieToDecimal4 < ActiveRecord::Migration[7.1]
  def change
    change_table :movies do |t|
      t.remove :id
    end

    add_column :movies, :id, :bigint

    # Cria uma sequência para a coluna de ID
    execute "CREATE SEQUENCE movies_id_seq START 1"

    # Define o valor padrão da coluna de ID para o próximo valor disponível na sequência
    execute "ALTER TABLE movies ALTER COLUMN id SET DEFAULT nextval('movies_id_seq')"

    # Define a coluna de ID como chave primária
    execute "ALTER TABLE movies ADD PRIMARY KEY (id)"
  end
end