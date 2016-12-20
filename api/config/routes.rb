Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
 
  namespace :api do
    namespace :v1 do
      get '/ping' => 'ping#index'
      get '/hi' => 'hi#index'
    end
  end
  
  get 'users/delete-all' => 'admin#delete_all_users'
end
