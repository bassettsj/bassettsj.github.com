import 'prismjs/prism.js';
import 'prismjs/components/prism-coffeescript';
import 'prismjs/components/prism-bash';
import Perfume from 'perfume.js';

const perfume = new Perfume({
  googleAnalytics: true,
  firstPaint: true,
  firstContentfulPaint: true,
  timeToInteractive: true,
});

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
