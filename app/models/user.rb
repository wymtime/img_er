class User < ActiveRecord::Base
  has_many(
  :posts,
  class_name: 'Post',
  foreign_key: :user_id,
  primary_key: :id
  )
  
  has_many(
  :comments,
  class_name: 'Comment',
  foreign_key: :user_id,
  primary_key: :id
  )
  
  before_validation :ensure_session_token

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(pt)
    self.password_digest = BCrypt::Password.create(pt)
  end

  def is_password?(pt)
    @password = pt
    BCrypt::Password.new(self.password_digest).is_password?(pt) unless pt.nil?
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
