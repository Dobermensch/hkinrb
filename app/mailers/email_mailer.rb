class EmailMailer < ApplicationMailer
    default from: 'hkinrb@gmail.com'

    def confirm_email
        @email = params[:email]
        @url = "#{ENV["SERVER_URL"]}/confirm_exp/#{params[:exp_token]}"
        mail(to: @email, subject: "HKINRB - Please Confirm That You'd Like To Post The Story")
    end
end
