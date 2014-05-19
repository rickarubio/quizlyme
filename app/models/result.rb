class Result < ActiveRecord::Base
  belongs_to :user
  belongs_to :quiz
  has_many :user_responses
  attr_accessible :user_id, :quiz_id, :score
end