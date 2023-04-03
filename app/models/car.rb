class Car < ApplicationRecord
  include CloudinaryHelper
  has_one_attached :image
  validates :color, :engine, :year, :title, :price, :image, presence: true

  scope :recent, ->(max_limit = 8) { order('created_at').limit(max_limit) }

  def imageUrl
    # image.url if image.attached?
    # Rails.application.routes.url_helpers.url_for(image) if image.attached?
    if image.attached?
      cl_image_path(self.image.key, width: 300, height: 300, crop: :fill)
      # Cloudinary::Utils.cloudinary_url(image)
    end
    
  end
end
