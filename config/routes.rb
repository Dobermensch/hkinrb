Rails.application.routes.draw do
  resources :experiences
  get '/get_ids', to: 'experiences#get_ids'
  root 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
