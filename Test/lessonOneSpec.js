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

describe('Problem 4 - Undefined Variable', () => {
  it('notDefined should be undefined', () => {
    expect(notDefined).toBeUndefined()
  })
})

describe('Problem 5 - Null Variable', () => {
  it('nothingHere should exist', () => {
    expect(nothingHere).toBeDefined()
  })
  it('nothingHere should have a value of null', () => {
    expect(typeof nothingHere).toEqual('object')
  })
})

describe('Problem 6 - Data Types One', () => {
  it('dataTypesOne should equal the correct data type', () => {
    expect(dataTypesOne).toEqual(['Boolean'])
  })
})

describe('Problem 7 - Data Types Two', () => {
  it('dataTypesTwo should equal the correct data type', () => {
    expect(dataTypesTwo).toEqual(['String'])
  })
})

describe('Problem 8 - Data Types Three', () => {
  it('dataTypesThree should equal the correct data type', () => {
    expect(dataTypesThree).toEqual(['Number'])
  })
})

describe('Problem 9 - Data Types Four', () => {
  it('dataTypesFour should equal the correct data type', () => {
    expect(dataTypesFour).toEqual(['Undefined'])
  })
})

