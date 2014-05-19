class Result < ActiveRecord::Base
  belongs_to :user
  belongs_to :quiz
  attr_accessible :responses
end