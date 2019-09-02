//TEST FILE - DO NOT TYPE IN THIS FILE

describe('Problem 1 - String Variable', () => {
    it('helloWorld should exist', () => {
      expect(helloWorld).toBeDefined()
    })
    it(`helloWorld's value should be 'Hello World!'`, () => {
      expect(helloWorld).toEqual('Hello World!')
    })
  })

describe('Problem 2 - Number Variable', () => {
  it('favNumber should exist', () => {
    expect(myAge).toBeDefined()
  })
  it('favNumber should be equal to a number', () => {
    expect(typeof myAge).toEqual('number')
  })
})

describe('Problem 3 - Boolean Variable', () => {
  it('trueOrFalse should exist', () => {
    expect(trueOrFalse).toBeDefined()
  })
  it('trueOrFalse should be equal to a boolean', () => {
    expect(typeof trueOrFalse).toEqual('boolean')
  })
})