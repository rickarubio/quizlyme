class Question < ActiveRecord::Base
  attr_accessible :text, :quiz_id
  has_many :choices
  belongs_to :quiz
end