require 'down'

class AdditionalFoodMovie < ApplicationRecord

  has_one_attached :image_main

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
end
