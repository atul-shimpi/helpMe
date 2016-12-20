module Api
  module V1
    class HiController < ApplicationController     
      def index        
          send_response('Valid User' + current_user.name)        
      end
    end
  end
end
