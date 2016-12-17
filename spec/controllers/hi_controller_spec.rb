require 'rails_helper'

RSpec.describe HiController, type: :controller do

  describe "GET #hi" do
    it "checks if application server is running" do
      get :hi
      expect(response).to have_http_status(:success)
    end
  end

end
