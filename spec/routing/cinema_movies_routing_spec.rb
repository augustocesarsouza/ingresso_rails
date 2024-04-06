require "rails_helper"

RSpec.describe CinemaMoviesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/cinema_movies").to route_to("cinema_movies#index")
    end

    it "routes to #new" do
      expect(get: "/cinema_movies/new").to route_to("cinema_movies#new")
    end

    it "routes to #show" do
      expect(get: "/cinema_movies/1").to route_to("cinema_movies#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/cinema_movies/1/edit").to route_to("cinema_movies#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/cinema_movies").to route_to("cinema_movies#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/cinema_movies/1").to route_to("cinema_movies#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/cinema_movies/1").to route_to("cinema_movies#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/cinema_movies/1").to route_to("cinema_movies#destroy", id: "1")
    end
  end
end
