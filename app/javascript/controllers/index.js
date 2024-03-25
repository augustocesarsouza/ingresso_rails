// Import and register all your controllers from the importmap under controllers/*

import { application } from "./application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import HelloController from "./hello_controller"
application.register("hello", HelloController)

import AdminModalController from "./admin_modal_controller"
application.register("admin-modal", AdminModalController)

import ModalController from "./modal_controller"
application.register("modal", ModalController)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)
