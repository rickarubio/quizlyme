class Quiz < ActiveRecord::Base
  has_many :results
  has_many :users, through: :results
  has_many :questions
  belongs_to :user
  attr_accessible :name, :user_id
end