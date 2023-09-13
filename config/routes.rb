Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'article/index'
      get 'article/create'
      get 'article/show'
      get 'article/destroy'
    end
  end
  # get 'homepage/index'
  root 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
