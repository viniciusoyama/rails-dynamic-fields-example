
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  updateDependent(event) {
    const turboFrameSelector = event.params.turboFrameSelector    
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
      const requestParamValue = event.target.value

      const fullURL = new URL(updateUrl);
      fullURL.searchParams.set(requestParamName, requestParamValue);
      fullURL.searchParams.set('format', 'turbo_stream');

      
      turboFrame.src = fullURL.toString();

      turboFrame.reload()
    })
  }
}