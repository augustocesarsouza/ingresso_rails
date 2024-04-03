require 'rails_helper'

RSpec.describe "ChoseMovieTheaters", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/chose_movie_theater/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/chose_movie_theater/show"
      expect(response).to have_http_status(:success)
    end
  end

end
