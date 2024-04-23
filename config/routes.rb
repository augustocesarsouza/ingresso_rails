Rails.application.routes.draw do
  # devise_for :users
  devise_for :users, controllers: { registrations: 'registrations' }
  resources :regions
  resources :additional_info_users
  # get 'chose_movie_theater/index' # get 'chose_movie_theater/show'

  resources :chose_movie_theater, only: [:index]
  resources :chose_seats_and_more, only: [:index]

  # get 'chose_movie_theater/:movie_id', to: 'chose_movie_theater#index', as: 'chose_movie_theater_index'

  # Defines the root path route ("/")
  root to: 'home#index'

  namespace :admin do
    root to: 'home#index'

    resources :movies
    resources :regions
    resources :movie_theaters
    resources :cinemas
    resources :cinema_movies
    resources :form_of_payments
    resources :additional_food_movies
  end
end
