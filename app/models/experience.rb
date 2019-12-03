class Experience < ApplicationRecord
    include ActiveModel::Validations

    attr_accessor :name_poster, :email, :phone_number, :story, :location, :approved, :email_confirmed

    validates :phone_number, presence: true
    validates :email, presence: true
    validates :story, presence: true
end
