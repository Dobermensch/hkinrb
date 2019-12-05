class Experience < ApplicationRecord
    validates :phone_number, :email, :story, presence: true
end
