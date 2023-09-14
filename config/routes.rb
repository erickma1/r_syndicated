Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'articles/index'
      post 'article/create'
      # get 'article/:id'
      get '/show/:id', to: 'articles#show'
      # delete '/destroy/:id', to: 'article#destroy'
    end
  end
  # get 'homepage/index'
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
