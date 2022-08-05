class Car < ApplicationRecord
  has_one_attached :image
  validates :color, :engine, :year, :title, :price, :image, presence: true

  scope :recent, ->(max_limit = 8) { order('created_at').limit(max_limit) }

  def imageUrl
    Rails.application.routes.url_helpers.url_for(image) if image.attached?
  end
end
