class User < ActiveRecord::Base
  attr_accessible :username, :password
  validates_presence_of :username, :password
  has_secure_password
  has_many :results
  has_many :quizzes, through: :results

  def self.authenticate(username, password)
    @user = find_by_username(username)
    if @user && @user.authenticate(password)
      @user
    else
      nil
    end
  end
end