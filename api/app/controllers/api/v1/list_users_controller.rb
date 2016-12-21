module Api
  module V1
    class ListUsersController < ApplicationController
      def index
        render json: User.all
      end
    end
  end
end
