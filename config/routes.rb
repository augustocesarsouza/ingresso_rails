Rails.application.routes.draw do
  devise_for :users
  resources :regions

  # Defines the root path route ("/")
  root to: 'home#index'

  namespace :admin do
    root to: 'home#index'

    resources :movies
    resources :regions
    resources :movie_theaters
  end
end
