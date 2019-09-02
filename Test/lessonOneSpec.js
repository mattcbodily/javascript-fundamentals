describe('Problem 1 - String Variable', ()=>{
    it('Variable should exist', ()=>{
      expect(string).toBeDefined()
    })
    it('Value of variable should be a string', ()=>{
      expect(typeof string).toEqual('string')
    })
  })