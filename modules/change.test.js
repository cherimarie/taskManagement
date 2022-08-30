const change = require('./change')

describe("getById", function(){
  test("returns a single object", function(){
    let gotten = change.getById(83)
    expect(typeof gotten).toEqual('object')
    expect(gotten.constructor).toEqual(Object)
  })
})

describe("build", function(){
  test("returns an object", function(){
    let built = change.build()
    let keys = Object.keys(built)
    expect(keys).toContain('eventId')
    expect(keys).toContain('fieldName')
    expect(keys).toContain('newValue')
    expect(keys).toContain('previousValue')
  })
  test("it does not save the object", function(){
    let built = change.build()
    let keys = Object.keys(built)
    expect(keys).not.toContain('id')
  })
})