import { Controller } from "@hotwired/stimulus"

function updateTurboFrames(turboFrameSelector, requestParamValue) {
  const elements = document.querySelectorAll(turboFrameSelector)

  elements.forEach((turboFrame) => {

    if (!turboFrame.hasAttribute('data-update-url')) {
      console.warn(`Turbo frame with selector ${turboFrameSelector} is missing the 'data-update-url' attribute`)
      return
    }

    if (!turboFrame.hasAttribute('data-request-param-name')) {
      console.warn(`Turbo frame with selector ${turboFrameSelector} is missing the 'data-request-param-name' attribute`)
      return
    }

    const updateUrl = turboFrame.getAttribute('data-update-url')
    const requestParamName = turboFrame.getAttribute('data-request-param-name')

    const fullURL = new URL(updateUrl);
    fullURL.searchParams.set(requestParamName, requestParamValue);

    turboFrame.src = fullURL.toString();

    turboFrame.reload()
  })
}

export default class extends Controller {
  static targets = [ "hasDependents" ]

  hasDependentsTargetConnected(element) {

    if (!element.hasAttribute('data-dependant-turbo-frame-selector')) {
      console.warn(`hasDependents element is missing the 'data-dependant-turbo-frame-selector' attribute`)
      return
    }

    const turboFrameSelector = element.getAttribute('data-dependant-turbo-frame-selector')

    element.addEventListener('change', () => {
      updateTurboFrames(turboFrameSelector, element.value)
    })
  }

  hasDependentsTargetDisconnected(element) {
    // The 'isDisconnecting' is for edge cases where a existing form is being replaced
    // With a new instance of the same form (for instance, an update with errors)
    // Without this condition, a new request (with an empty param value) to update the dependent turbo frames will be triggered
    // And the response will replace the content of the new form (which already have the dependent content loaded)
    // With an empty state dependent content. Resulting in an undesirable state.
    if (this.isDisconnecting != true) {
      const turboFrameSelector = element.getAttribute('data-dependant-turbo-frame-selector')
      updateTurboFrames(turboFrameSelector, '')
    }
  }

  disconnect() {
    this.isDisconnecting = true
  }

}