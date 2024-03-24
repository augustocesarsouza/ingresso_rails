class ChangeRecordIdToUuidInActiveStorageAttachments < ActiveRecord::Migration[7.1]
  def change
    add_column :active_storage_attachments, :uuid, :uuid, default: "gen_random_uuid()", null: false

    change_table :active_storage_attachments do |t|
      t.remove :record_id
      t.rename :uuid, :record_id
    end
  end
end
