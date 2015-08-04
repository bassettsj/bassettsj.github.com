import '../bower_components/prismjs/prism.js'
import '../bower_components/prismjs/components/prism-coffeescript'
import '../bower_components/prismjs/components/prism-bash'

function onLoad () {
  global.Prism.highlightAll()
  window.removeEventListener('load', onLoad)
}

window.addEventListener('load', onLoad, false)
