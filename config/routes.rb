Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'articles/index'
      get 'articles/news'
      get 'articles/mostread'
      post 'article/create'
      get '/show/:id', to: 'articles#show'
      get '/max_id/', to: 'articles#max_id'
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
