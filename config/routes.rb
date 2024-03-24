Rails.application.routes.draw do
  resources :regions
  devise_for :users
  
  # Defines the root path route ("/")
  root to: "home#index"

  namespace :admin do
    root to: 'home#index'

    resources :movies
  end
end
