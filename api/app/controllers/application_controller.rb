class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  def send_response(body, status_code = 200)
    render :status => status_code, :json => {data: body}
  end
end
