class HiController < ApplicationController
  def hi
    puts User.all
    send_response('Hi, I am running')
  end
end
