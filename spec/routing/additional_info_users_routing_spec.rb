require "rails_helper"

RSpec.describe AdditionalInfoUsersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/additional_info_users").to route_to("additional_info_users#index")
    end

    it "routes to #new" do
      expect(get: "/additional_info_users/new").to route_to("additional_info_users#new")
    end

    it "routes to #show" do
      expect(get: "/additional_info_users/1").to route_to("additional_info_users#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/additional_info_users/1/edit").to route_to("additional_info_users#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/additional_info_users").to route_to("additional_info_users#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/additional_info_users/1").to route_to("additional_info_users#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/additional_info_users/1").to route_to("additional_info_users#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/additional_info_users/1").to route_to("additional_info_users#destroy", id: "1")
    end
  end
end
