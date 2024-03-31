class CreateAdditionalInfoUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :additional_info_users do |t|

      t.timestamps
    end
  end
end
