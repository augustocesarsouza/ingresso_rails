require "rails_helper"

RSpec.describe AdditionalFoodMoviesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/additional_food_movies").to route_to("additional_food_movies#index")
    end

    it "routes to #new" do
      expect(get: "/additional_food_movies/new").to route_to("additional_food_movies#new")
    end

    it "routes to #show" do
      expect(get: "/additional_food_movies/1").to route_to("additional_food_movies#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/additional_food_movies/1/edit").to route_to("additional_food_movies#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/additional_food_movies").to route_to("additional_food_movies#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/additional_food_movies/1").to route_to("additional_food_movies#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/additional_food_movies/1").to route_to("additional_food_movies#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/additional_food_movies/1").to route_to("additional_food_movies#destroy", id: "1")
    end
  end
end
