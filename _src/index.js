import Prism from 'prism'
import 'prism-bash'
import 'prism-coffeescript'

let onLoad = () => {
  Prism.highlightAll()
  global.removeEventListener('load', this.onLoad)
}


alert('hi')

global.addEventListener('load', onLoad, false)
