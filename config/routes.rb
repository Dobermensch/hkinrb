Rails.application.routes.draw do
  root 'homepage#index'
  resources :experiences
  get '/get_ids', to: 'experiences#get_ids'
  get '/confirm_exp/:id', to: 'experiences#confirm_exp'
  get '/mogambo_khush_hua/:id', to: 'experiences#mogambo_khush_hua'
  get '/read', to: 'homepage#index'
  get '/about', to: 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
