class ProjectLabel
  LABELS = {  
    'Alpha' => ["label 1", "label 2"], 
    'Omega' => ["label 3"], 
    'Zeta' => ["label 4"]
  }

  def self.find_by_project(project)
    LABELS[project] || []
  end
end