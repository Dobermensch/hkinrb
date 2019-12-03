class CreateExperiences < ActiveRecord::Migration[6.0]
  def change
    create_table :experiences do |t|
      t.string :name_poster
      t.string :phone_number
      t.string :email
      t.string :story
      t.string :location
      t.boolean :approved
      t.boolean :email_confirmed
      
      t.timestamps
    end
  end
end
