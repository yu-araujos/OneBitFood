class Restaurant < ApplicationRecord
  belongs_to :category

  has_many :product_categories
  has_many :orders

  validates :name, :delivery_tax, :city, :neighborhood, :street, :number, presence: true

  has_one_attached :image

  def self.ransackable_attributes(auth_object = nil)
    ["category_id", "city", "complement", "delivery_tax", "description", "name", "neighborhood", "number", "street"]
  end

  def self.ransackable_associations(auth_object = nil)
    ["category", "image_attachment", "image_blob", "orders", "product_categories"]
  end
end
