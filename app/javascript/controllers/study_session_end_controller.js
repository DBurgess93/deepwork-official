import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="study-session-end"
export default class extends Controller {
  connect() {
    this.element.click()
  }
}
