class Person < ApplicationRecord
  validates :name, presence: true
  validates :country, presence: true
  validates :state, presence: true
  validates :city, presence: true
end
