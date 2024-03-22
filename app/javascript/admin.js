// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import "./controllers"
import "./jquery"

import * as bootstrap from "bootstrap"
window.bootstrap = bootstrap

// import { Turbo } from "@hotwired/turbo-rails"
// Turbo.session.drive = false

import "./sbadmin/sbadmin.js" 
import "./sbadmin/jquery-easing/jquery.easing.min.js"