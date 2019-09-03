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

describe('Problem 10 - Addition', () => {
  it('add variable should be assigned a value', () => {
    expect(add).toBeDefined()
  })
  it('add variable should be assigned the correct value', () => {
    expect(add).toEqual(15)
  })
})

describe('Problem 11 - Subtraction', () => {
  it('subtract variable should be assigned a value', () => {
    expect(subtract).toBeDefined()
  })
  it('subtract variable should be assigned the correct value', () => {
    expect(subtract).toEqual(-5 || 5)
  })
})

describe('Problem 12 - Multiplication', () => {
  it('multiply variable should be assigned a value', () => {
    expect(multiply).toBeDefined()
  })
  it('multiply variable should be assigned the correct value', () => {
    expect(multiply).toEqual(50)
  })
})

describe('Problem 13 - Division', () => {
  it('divide variable should be assigned a value', () => {
    expect(divide).toBeDefined()
  })
  it('divide variable should be assigned the correct value', () => {
    expect(divide).toEqual(2 || .5)
  })
})

describe('Problem 14 - Remainder', () => {
  it('remainder variable should be assigned a value', () => {
    expect(remainder).toBeDefined()
  })
  it('remainder variable should be assigned the correct value', () => {
    expect(remainder).toEqual(0 || 5)
  })
})