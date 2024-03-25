require 'down'

class Movie < ApplicationRecord
  # has_one_attached :images do |attachable|
  #   attachable.variant :img_main, resize_to_limit: [625, 919]
  #   attachable.variant :img_background, resize_to_limit: [1440, 500] # fazer delete amanh
  # end

  has_one_attached :image_main
  has_one_attached :image_background

  attr_accessor :images

  has_many :movie_theater, dependent: :destroy

  def create_img_cloudinary_main(file_content, movie_attach, width, height)
    cloudinary_response = Cloudinary::Uploader.upload(file_content,
                                                      width:,
                                                      height:,
                                                      secure: true) # secure -> Garante que a URL retornado será segura (https)

    image_url = cloudinary_response['secure_url']
    tempfile = Down.download(image_url)
    movie_attach.attach(io: tempfile, filename: File.basename(image_url))

    public_id = cloudinary_response['public_id']
    Cloudinary::Uploader.destroy(public_id) if public_id.present?
  end

  def create_img_cloudinary_background(file_content, movie_attach, width, height)
    cloudinary_response = Cloudinary::Uploader.upload(file_content,
                                                      width:,
                                                      height:,
                                                      crop: 'fill',
                                                      gravity: 'face',
                                                      quality: 100,
                                                      secure: true)

    image_url = cloudinary_response['secure_url']
    tempfile = Down.download(image_url)
    movie_attach.attach(io: tempfile, filename: File.basename(image_url))

    public_id = cloudinary_response['public_id']
    Cloudinary::Uploader.destroy(public_id) if public_id.present?
  end

  validates :title, :description, :gender, :duration, :movie_rating, :status_movie, presence: true
end
