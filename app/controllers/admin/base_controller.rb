module Admin
  class BaseController < ApplicationController
    layout 'admin' # trocando porque por padrão ele usar leyaout application, com esse "layout" conseguimos configurar nosso layout
    before_action :authenticate_user! # ISSO VE SE O USUARIO ESTÁ LAGADO! antes de chamar a action, ele passa por essa primeira para ver se o usiaro é admin,
    before_action :only_admin!

    private def only_admin!
      redirect_to root_path unless current_user.admin?
    end
  end
end
