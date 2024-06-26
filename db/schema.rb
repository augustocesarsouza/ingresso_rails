# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_05_01_112126) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  # Custom types defined in this database.
  # Note that some types may not work with other database engines. Be careful if changing database.
  create_enum "role_user", ["user", "admin"]

  create_table "active_storage_attachments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.uuid "record_id", null: false
    t.uuid "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "additional_food_movies", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "title", limit: 100, null: false
    t.string "price", limit: 70, null: false
    t.string "fee", limit: 60, null: false
    t.uuid "movie_id", null: false
    t.uuid "cinema_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cinema_id"], name: "index_additional_food_movies_on_cinema_id"
    t.index ["movie_id"], name: "index_additional_food_movies_on_movie_id"
  end

  create_table "additional_info_users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.date "birth_date"
    t.string "gender", limit: 50
    t.string "phone", limit: 88
    t.string "cep", limit: 40
    t.string "logradouro", limit: 60
    t.string "numero", limit: 30
    t.string "complemento", limit: 40
    t.string "referencia", limit: 40
    t.string "bairro", limit: 50
    t.string "estado", limit: 20
    t.string "cidade", limit: 60
    t.uuid "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_additional_info_users_on_user_id"
  end

  create_table "cinema_movies", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "movie_id", null: false
    t.uuid "cinema_id", null: false
    t.uuid "region_id", null: false
    t.string "screening_schedule", limit: 100, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "room", null: false
    t.index ["cinema_id"], name: "index_cinema_movies_on_cinema_id"
    t.index ["movie_id"], name: "index_cinema_movies_on_movie_id"
    t.index ["region_id"], name: "index_cinema_movies_on_region_id"
  end

  create_table "cinemas", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name_cinema", limit: 150, null: false
    t.string "district", limit: 150, null: false
    t.string "ranking", limit: 150, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "form_of_payments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "form_name", limit: 70, null: false
    t.string "price", limit: 70, null: false
    t.uuid "movie_id", null: false
    t.uuid "cinema_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cinema_id"], name: "index_form_of_payments_on_cinema_id"
    t.index ["movie_id"], name: "index_form_of_payments_on_movie_id"
  end

  create_table "movie_theaters", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "movie_id", null: false
    t.uuid "region_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["movie_id"], name: "index_movie_theaters_on_movie_id"
    t.index ["region_id"], name: "index_movie_theaters_on_region_id"
  end

  create_table "movies", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "title", limit: 100, null: false
    t.string "description", limit: 1000, null: false
    t.string "gender", limit: 100, null: false
    t.string "duration", limit: 30, null: false
    t.integer "movie_rating", null: false
    t.string "status_movie", limit: 30, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "regions", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "state", limit: 70, null: false
    t.string "city", limit: 70, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.string "name", null: false
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.enum "role", default: "user", null: false, enum_type: "role_user"
    t.string "cpf", default: "", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "additional_food_movies", "cinemas"
  add_foreign_key "additional_food_movies", "movies"
  add_foreign_key "additional_info_users", "users"
  add_foreign_key "cinema_movies", "cinemas"
  add_foreign_key "cinema_movies", "movies"
  add_foreign_key "cinema_movies", "regions"
  add_foreign_key "form_of_payments", "cinemas"
  add_foreign_key "form_of_payments", "movies"
  add_foreign_key "movie_theaters", "movies"
  add_foreign_key "movie_theaters", "regions"
end
