Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :cars, only: [:index, :show]
    resources :favorites, only:[:create, :destroy, :show]
    resources :test_drives, only: [:show, :create, :destroy]
  end
end
