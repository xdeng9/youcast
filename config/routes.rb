Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:index, :show, :create, :destroy, :update] do
      resources :comments, only: [:index]
      resources :likes, only: [:index]
    end
      
    resources :comments, only: [:create, :update, :destroy]
    resources :likes, only: [:create, :update, :destroy]

    get '/verify_email', to: 'users#valid_email?'
    get '/search/:query', to: 'videos#search'
  end
  root 'static_pages#root'
end
