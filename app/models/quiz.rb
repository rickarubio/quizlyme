class Quiz < ActiveRecord::Base
  has_many :results
  has_many :users, through: :results
  attr_accessible :name
end