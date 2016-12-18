module Api
  module V1
    class PingController < ApplicationController
      def index
        send_response('Hi, I am running')
      end
    end
  end
end