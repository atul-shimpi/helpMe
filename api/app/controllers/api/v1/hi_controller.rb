module Api
  module V1
    class HiController < ApplicationController
      def index
        if user_signed_in?
          send_response('Valid User' + current_user.name)
        else
          send_response('Invalid user', 401)
        end
     end
    end
  end
end
