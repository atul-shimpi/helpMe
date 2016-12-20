class AdminController < ActionController::API  
  def delete_all_users
    User.delete_all
    send_response('Deleted All Records')
  end
end