import { Controller } from "@hotwired/stimulus"
import { Turbo } from "@hotwired/turbo-rails";

// Connects to data-controller="admin-modal"
export default class extends Controller {
  connect() {
    this.element.setAttribute("data-action", "click->admin-modal#click_modal");
  }

  click_modal(e){
    e.preventDefault();
    this.url = this.element.getAttribute('href');

    fetch(this.url, {
      headers: { 
        Accept: "text/vnd.turbo-stream.html" // aqui inves dele chamar edit.html, ele vai fazer "edit.turbo_stream" do turbo stream, muda de via "HTML" via "TURBO STREAM"
      }
    })
    .then(res => res.text())
    .then(html => Turbo.renderStreamMessage(html))
  }
}
