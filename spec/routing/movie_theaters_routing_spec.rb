require "rails_helper"

RSpec.describe MovieTheatersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/movie_theaters").to route_to("movie_theaters#index")
    end

    it "routes to #new" do
      expect(get: "/movie_theaters/new").to route_to("movie_theaters#new")
    end

    it "routes to #show" do
      expect(get: "/movie_theaters/1").to route_to("movie_theaters#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/movie_theaters/1/edit").to route_to("movie_theaters#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/movie_theaters").to route_to("movie_theaters#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/movie_theaters/1").to route_to("movie_theaters#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/movie_theaters/1").to route_to("movie_theaters#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/movie_theaters/1").to route_to("movie_theaters#destroy", id: "1")
    end
  end
end
