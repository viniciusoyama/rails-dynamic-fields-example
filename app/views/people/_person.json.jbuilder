json.extract! person, :id, :name, :state, :city, :country, :created_at, :updated_at
json.url person_url(person, format: :json)
