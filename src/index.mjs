import makeDebug from './debug'
import app from './app'

const debug = makeDebug('index')

function testF (x, y) {
  return x * y
}

debug(`hello from %s`, `index`)
debug(`a: ${app.a}`)

export default testF
