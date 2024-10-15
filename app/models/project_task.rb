class ProjectTask
  TASKS = {
    'Alpha' => ["Al Task 1", "Al Task 2"], 
    'Omega' => ["Om Task 1"], 
    'Zeta' => ["Zt task 1", "Zt task 2", "Zt task 3"]
  }
  
  def self.find_by_project(project)
    TASKS[project] || []
  end
end