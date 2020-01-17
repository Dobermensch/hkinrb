class ExperiencesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_experience, only: [:show, :edit, :update, :destroy]


  # GET /experiences
  # GET /experiences.json
  def index
    @experiences = Experience.where(approved: true, email_confirmed: true)
  end

  def get_ids
    @experiences = Experience.where(approved: true, email_confirmed: true).pluck(:id)
    render json: @experiences
  end

  # GET /experiences/1
  # GET /experiences/1.json
  def show
    @experience = Experience.find(params[:id]).pluck(:story, :title, :age, :ethnicity)
    render json: @experience
  end

  # GET /experiences/new
  # def new
  #   @experience = Experience.new
  # end

  # GET /experiences/1/edit
  # def edit
  # end

  # POST /experiences
  # POST /experiences.json
  def create
    @experience = Experience.new(experience_params)
    
    respond_to do |format|
      if @experience.save

        # Send a confirmation email for the story
        EmailMailer.with(email: @experience.email, exp_token: @experience.exp_token).confirm_email.deliver_now
        
        # Notify the moderator via email
        EmailMailer.with(id: @experience.id).notify_overlord.deliver_now

        format.json { render json: @experience, status: :created }
      else
        format.json { render json: @experience.errors, status: :unprocessable_entity }
      end
    end
  end

  def confirm_exp
    @experience = Experience.find_by(exp_token: params[:id])

    if @experience
      @experience.update!(email_confirmed: true)

      obj = {message: "Story confirmed! Please wait while we assess this story."}
    else
      obj = {message: "Cannot find that experience. Please contact us at xxx to resolve this issue."}
    end

    render json: obj
  end

  # PATCH/PUT /experiences/1
  # PATCH/PUT /experiences/1.json
  # def update
  #   respond_to do |format|
  #     if @experience.update(experience_params)
  #       format.html { redirect_to @experience, notice: 'Experience was successfully updated.' }
  #       format.json { render :show, status: :ok, location: @experience }
  #     else
  #       format.html { render :edit }
  #       format.json { render json: @experience.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # DELETE /experiences/1
  # DELETE /experiences/1.json
  # def destroy
  #   @experience.destroy
  #   respond_to do |format|
  #     format.html { redirect_to experiences_url, notice: 'Experience was successfully destroyed.' }
  #     format.json { head :no_content }
  #   end
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_experience
      @experience = Experience.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def experience_params
      params.require(:experience).permit(:name_poster, :email, :story, :phone_number, :title, :location, :age, :ethnicity)
    end
end
