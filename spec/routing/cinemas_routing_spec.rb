require "rails_helper"

RSpec.describe CinemasController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/cinemas").to route_to("cinemas#index")
    end

    it "routes to #new" do
      expect(get: "/cinemas/new").to route_to("cinemas#new")
    end

    it "routes to #show" do
      expect(get: "/cinemas/1").to route_to("cinemas#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/cinemas/1/edit").to route_to("cinemas#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/cinemas").to route_to("cinemas#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/cinemas/1").to route_to("cinemas#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/cinemas/1").to route_to("cinemas#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/cinemas/1").to route_to("cinemas#destroy", id: "1")
    end
  end
end
