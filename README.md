# README

Example project for How to Create Dynamic Form Fields in Rails with Auto-Updates with Hotwire, StimulusJS, and Turbo

- Video tutorial: https://youtu.be/TUIR-PYJxlg
- Blog post: https://vinioyama.com/blog/how-to-create-dynamic-form-fields-in-rails-with-auto-updates-with-hotwire-stimulusjs-and-turbo/

# How to Run?

- `docker compose build`
- `docker compose up`
- `docker compose run web bin/rails db:create db:migrate`

Go to `http://localhost:3000/people/new` 

And test changing the country/state/city selects or the project select.