class ApplicationController < ActionController::API  
  include DeviseTokenAuth::Concerns::SetUserByToken
  before_filter :configure_permitted_parameters, if: :devise_controller?
  before_action :authenticate_user!
  skip_before_action :authenticate_user!, if: :devise_controller?
  
  def send_response(body, status_code = 200)
    render :status => status_code, :json => {data: body}
  end   

  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :email, :password])
    devise_parameter_sanitizer.permit(:account_update, keys: [:name, :email, :password])
  end
end
