class AddProjectFieldsToPeople < ActiveRecord::Migration[7.2]
  def change
    add_column :people, :project, :string
    add_column :people, :project_category, :string
    add_column :people, :project_task, :string
  end
end
