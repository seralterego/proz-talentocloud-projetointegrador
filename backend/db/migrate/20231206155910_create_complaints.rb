class CreateComplaints < ActiveRecord::Migration[7.1]
  def change
    create_table :complaints do |t|
      t.string :type
      t.string :longitude
      t.string :latitude

      t.timestamps
    end
  end
end
