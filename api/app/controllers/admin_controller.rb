class AdminController < ApplicationController  
  skip_before_action :authenticate_user!
  
  def delete_all_users  
    User.delete_all
    send_response('Deleted All Records')
  end
end