class Experience < ApplicationRecord
    validates :phone_number, :email, :story, presence: true
    before_create :create_exp_token

    private

    def create_exp_token
        self.exp_token = SecureRandom.hex
    end
end
