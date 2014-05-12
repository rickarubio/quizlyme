class User < ActiveRecord::Base
  attr_accessible :username, :password
  validates_presence_of :username, :password
  validates :username, uniqueness: true
  has_many :results
  has_many :quizzes, through: :results
  has_secure_password

  def self.authenticate(username, password)
    @user = find_by_username(username)
    if @user && @user.authenticate(password)
      @user
    else
      nil
    end
  end
end