class Article < ApplicationRecord
  validates :headline, presence: true
  validates :main_text, presence: true
  validates :section, presence: true
end
