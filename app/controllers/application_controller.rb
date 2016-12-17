class ApplicationController < ActionController::API
  def send_response(data)
    render :status => 200,
          :json => data
  end
end
