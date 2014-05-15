class Choice < ActiveRecord::Base
  attr_accessible :text, :answer, :question_id
  belongs_to :question
end