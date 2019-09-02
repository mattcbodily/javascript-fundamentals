describe('Problem 1 - String Variable', () => {
    it('helloWorld should exist', () => {
      expect(helloWorld).toBeDefined()
    })
    it(`helloWorld's value should be 'Hello World!'`, () => {
      expect(helloWorld).toEqual('Hello World!')
    })
  })

describe('Problem 2 - Number Variable', () => {
  it('myAge should exist', () => {
    expect(myAge).toBeDefined()
  })
  it('myAge should be equal to a number', () => {
    expect(typeof myAge).toEqual('number')
  })
})