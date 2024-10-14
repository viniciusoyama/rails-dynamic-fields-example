class CreatePeople < ActiveRecord::Migration[7.2]
  def change
    create_table :people do |t|
      t.string :name
      t.string :state
      t.string :city
      t.string :country

      t.timestamps
    end
  end
end
