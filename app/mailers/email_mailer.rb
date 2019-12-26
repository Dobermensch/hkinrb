class EmailMailer < ApplicationMailer
    default from: 'hkirnb@gmail.com'

    def confirm_email
        @email = params[:email]
        @url = "#{ENV["REACT_APP_API_URL"]}/confirm_exp/#{params[:exp_token]}"
        mail(to: @email, subject: "ME:HK - Please Confirm That You'd Like To Post The Story")
    end
end
