module Api
  module V1
    class PingController < ApplicationController
      skip_before_action :authenticate_user!
      
      def index
        send_response('Hi, I am running')
      end
    end
  end
end