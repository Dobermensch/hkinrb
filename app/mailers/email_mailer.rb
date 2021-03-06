class EmailMailer < ApplicationMailer
    default from: 'hkirnb@gmail.com'

    def confirm_email
        @email = params[:email]
        @url = "#{ENV["REACT_APP_API_URL"]}/confirm_exp/#{params[:exp_token]}"
        mail(to: @email, subject: "ME:HK - Please Confirm That You'd Like To Post The Story")
    end

    def notify_overlord
        @id = params[:id]
        @story = params[:story]
        @url = "#{ENV["REACT_APP_API_URL"]}/mogambo_khush_hua/#{params[:exp_token]}"
        @phone_number = params[:phone_number]
        @name = params[:name]
        mail(to: "#{ENV["OVERLORD_EMAIL"]}", subject: "ME:HK - 1 More Story #{@id}")
    end
end
