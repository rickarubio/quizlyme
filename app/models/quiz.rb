class Quiz < ActiveRecord::Base
  has_many :results
  has_many :users, through: :results
  has_many :questions
  attr_accessible :name
end