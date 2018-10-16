import 'mjs-mocha'
import chai from 'chai'

import testF from '../lib/index'

let expect = chai.expect

describe('testF', () => {
  it('should return 6', function () {
    expect(testF(3, 2)).to.equal(6)
  })
})
