class User < ApplicationRecord
  attr_reader :password

  after_initialize :ensure_session_token

  validates :password, length: {in: 8..64, allow_nil: true}    #following current NIST min/max range
  validates :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true

  def reset_session_token!
    begin
      new_token = SecureRandom.urlsafe_base64
    end while User.exists?(session_token: new_token)

    self.session_token = new_token
    self.save
    self.session_token
  end

  def password=(pass)
    @password = pass
    self.password_digest = BCrypt::Password.create(pass)
  end

  def is_password?(pass)
    BCrypt::Password.new(self.password_digest).is_password?(pass)
  end

  def self.find_by_credentials(email, pass)
    user = User.find_by(email: email)
    
    return nil if user.nil?
    user.is_password?(pass) ? user : nil
  end

  private 

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
