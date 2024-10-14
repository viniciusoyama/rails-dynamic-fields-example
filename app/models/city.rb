# city.rb
class City
  CITIES = {
    'California' => ['Los Angeles', 'San Francisco', 'San Diego'],
    'New York' => ['New York City', 'Buffalo', 'Albany'],
    'Texas' => ['Houston', 'Dallas', 'Austin'],
    'Jalisco' => ['Guadalajara', 'Puerto Vallarta', 'Zapopan'],
    'Mexico City' => ['Coyoacán', 'Iztapalapa', 'Xochimilco'],
    'Yucatán' => ['Mérida', 'Valladolid', 'Tizimín'],
    'Ontario' => ['Toronto', 'Ottawa', 'Hamilton'],
    'Quebec' => ['Montreal', 'Quebec City', 'Laval'],
    'British Columbia' => ['Vancouver', 'Victoria', 'Kelowna']
  }

  def self.find_by_state(state)
    CITIES[state] || []
  end
end