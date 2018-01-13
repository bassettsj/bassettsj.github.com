import '../bower_components/prismjs/prism.js'
import '../bower_components/prismjs/components/prism-coffeescript'
import '../bower_components/prismjs/components/prism-bash'

function onLoad () {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
  global.Prism.highlightAll()
  window.removeEventListener('load', onLoad)
}

window.addEventListener('load', onLoad, false)
