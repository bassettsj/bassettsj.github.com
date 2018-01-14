import '../bower_components/prismjs/prism.js'
import '../bower_components/prismjs/components/prism-coffeescript'
import '../bower_components/prismjs/components/prism-bash'

function onLoad () {
  if ('serviceWorker' in navigator) {
    if (location.protocol !== 'https') {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
          registration.unregister();
        }
      });
    } else {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    }
  }
  global.Prism.highlightAll()
  window.removeEventListener('load', onLoad)
}

window.addEventListener('load', onLoad, false)
