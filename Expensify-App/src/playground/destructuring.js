console.log('f');
const person ={
    name: "Gourab",
    age: 22,
    location: {
        city: "kolkata",
        temp: 92
    }
};
//es6 destructuring
const {name, age} = person 
// console.log(`${person.name}`);
console.log(`${name}`);

//destructure nested object
// const {city,temp} = person.location;
// console.log(`${city} and ${temp}`)
//rename variable while destructuring
const {city,temp: temperature} = person.location;
console.log(temperature);


//default value
const {height ='5'} = person;
console.log(height)
//default value plus rename
const {height: ht ='5'} = person;
console.log(ht)

///--Destructuring array
const address = ['1299 GT Road', 'kolkata', 'West Bengal']
//instead of using index like address[1]
//we will use destructure cz address[1] does'nt make sense 
// const [street,cityname,state] = address;//matching with position
// console.log(street+' ' +cityname+ ' ' +state)
//skipping any item like first
// const [,cityname,state] = address;//matching with position
// console.log(street+' ' +cityname+ ' ' +state)
//setting default value
const [street,cityname='ahmdabad',state] = address;//matching with position
console.log(street+' ' +cityname+ ' ' +state)
