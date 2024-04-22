class CreateTableFormOfPayment < ActiveRecord::Migration[7.1]
  def change
    create_table :form_of_payments, id: :uuid do |t|
      t.string :form_name, limit: 70, null: false
      t.string :price, limit: 70, null: false
      t.belongs_to :movie, null: false, foreign_key: true, type: :uuid
      t.belongs_to :cinema, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
