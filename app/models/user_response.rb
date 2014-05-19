class UserResponse < ActiveRecord::Base
  attr_accessible :result_id, :quiz_id, :question_id, :choice_id, :correct
  belongs_to :result
end