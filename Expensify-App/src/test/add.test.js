//jest provides us few global 
// variable this allow us to construct test cases
const add =(a,b)=>a+b;

//test is one that global variable
test('Should add two number',()=>{
    //write test cases
      const result=add(3,4);
     expect(result).toBe(7);
})