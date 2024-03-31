class CreateTableAdditionalInfoUser < ActiveRecord::Migration[7.1]
  def change
    create_table :additional_info_users, id: :uuid do |t|
      t.date :birth_date, null: true # date é bom para data de nascimento, e "timestamp(6)" guarda as horas e segundos o "date" nao
      t.string :gender, limit: 50, null: true
      t.string :phone, limit: 88, null: true
      t.string :cep, limit: 40, null: true
      t.string :logradouro, limit: 60, null: true
      t.string :numero, limit: 30, null: true
      t.string :complemento, limit: 40, null: true
      t.string :referencia, limit: 40, null: true
      t.string :bairro, limit: 50, null: true
      t.string :estado, limit: 20, null: true
      t.string :cidade, limit: 60, null: true
      t.belongs_to :user, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
