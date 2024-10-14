class State
  STATES = {
    'USA' => ['California', 'New York', 'Texas'],
    'Mexico' => ['Jalisco', 'Mexico City', 'Yucatán'],
    'Canada' => ['Ontario', 'Quebec', 'British Columbia']
  }

  def self.find_by_country(country)
    STATES[country] || []
  end
end