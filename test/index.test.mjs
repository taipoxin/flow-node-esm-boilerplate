import 'mjs-mocha'
import chai from 'chai'

import testF from '../lib/index'

describe('testF', () => {
  it('should return 6', () => {
    chai.expect(testF(3, 2)).to.equal(6)
  })
})
