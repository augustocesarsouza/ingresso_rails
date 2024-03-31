Rails.application.routes.draw do
  # devise_for :users
  devise_for :users, controllers: { registrations: 'registrations' }
  resources :regions
  resources :additional_info_users

  # Defines the root path route ("/")
  root to: 'home#index'

  namespace :admin do
    root to: 'home#index'

    resources :movies
    resources :regions
    resources :movie_theaters
  end
end
