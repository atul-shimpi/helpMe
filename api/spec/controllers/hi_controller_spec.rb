require 'rails_helper'

RSpec.describe HiController, type: :controller do

  describe "GET #hi" do
    it "Asks Who are you ? if user is not logged in ?" do
      get :index
      expect(response).to have_http_status(401)
    end

    it "Greets if user is not logged in" do
      get :index
      expect(response).to have_http_status(200)
    end
  end

end
