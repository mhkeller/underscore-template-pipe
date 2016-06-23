var template = require('./index')
var assert = require('chai').assert

describe('template', function () {
  describe('string input', function () {
    var testString = 'mhk'
    it('should return the given string: ' + testString, function () {
      assert.equal(testString, template('<%| name %>')({name: testString}))
    })
  })

  describe('array input', function () {
    var testObj = ['mhk']
    it('should return the given array: ' + JSON.stringify(testObj), function () {
      assert.equal(testObj, template('<%| name %>')({name: testObj}))
    })
  })

  describe('object input', function () {
    var testObj = {initials: 'mhk'}
    it('should return the given object: ' + JSON.stringify(testObj), function () {
      assert.equal(testObj, template('<%| name %>')({name: testObj}))
    })
  })

  describe('nested object input', function () {
    var testObj = {initials: 'mhk'}
    var testKey = 'initials'
    it('should return the given object\'s ' + testKey + ' property: ' + JSON.stringify(testObj[testKey]), function () {
      assert.equal(testObj[testKey], template('<%| name.' + testKey + ' %>')({name: testObj}))
    })
  })

  describe('array of objects input', function () {
    var testObj = [{initials: 'mhk'}, {initials: 'kmh'}]
    it('should return the given array of objects object: ' + JSON.stringify(testObj), function () {
      assert.equal(testObj, template('<%| name %>')({name: testObj}))
    })
  })
})

var templateSettings = {
  pipe: /<%~([\s\S]+?)%>/g // Use a `~` instead of `|`.
}

describe('template with custom syntax', function () {
  describe('string input', function () {
    var testString = 'mhk'
    it('should return the given string: ' + testString, function () {
      assert.equal(testString, template('<%~ name %>', templateSettings)({name: testString}))
    })
  })

  describe('array input', function () {
    var testObj = ['mhk']
    it('should return the given array: ' + JSON.stringify(testObj), function () {
      assert.equal(testObj, template('<%~ name %>', templateSettings)({name: testObj}))
    })
  })

  describe('object input', function () {
    var testObj = {initials: 'mhk'}
    it('should return the given object: ' + JSON.stringify(testObj), function () {
      assert.equal(testObj, template('<%~ name %>', templateSettings)({name: testObj}))
    })
  })

  describe('nested object input', function () {
    var testObj = {initials: 'mhk'}
    var testKey = 'initials'
    it('should return the given object\'s ' + testKey + ' property: ' + JSON.stringify(testObj[testKey]), function () {
      assert.equal(testObj[testKey], template('<%~ name.' + testKey + ' %>', templateSettings)({name: testObj}))
    })
  })

  describe('array of objects input', function () {
    var testObj = [{initials: 'mhk'}, {initials: 'kmh'}]
    it('should return the given array of objects object: ' + JSON.stringify(testObj), function () {
      assert.equal(testObj, template('<%~ name %>', templateSettings)({name: testObj}))
    })
  })
})
