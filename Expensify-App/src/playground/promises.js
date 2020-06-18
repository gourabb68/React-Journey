const promise = new Promise((resolve,reject)=>{
  const isSolved = false;
  if(isSolved){
    resolve('This is my resolved data');
  }else{
      reject('there is an error')
  }
    
})

// .then() register a call back that fire when 
//promise resolved
promise.then((data)=>{
   console.log("success: "+data)
}).catch((err)=>{
    console.log('Error: '+err)
})