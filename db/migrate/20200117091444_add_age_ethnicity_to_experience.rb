class AddAgeEthnicityToExperience < ActiveRecord::Migration[6.0]
  def change
    add_column :experiences, :age, :string
    add_column :experiences, :ethnicity, :string
  end
end
