class Person {
    constructor(name='anonymous' ,age=22 ){
        this.name = name;
        this.age = age;

    }
    getAge(){
     return `${this.name} is ${this.age} years old `;
    }
 
};

class Traveller extends Person{
    constructor(name,age,location){
        super(name,age);
        this.location = location;
    }

    hasLocation(){
        return !!this.location;
    }
    getAge(){
        let desc = super.getAge();
        // console.log(desc);
        if(this.hasLocation()){
            desc+= `I am living in ${this.location}` ;
        }
        console.log(desc)
    }

}

const mm = new Traveller('mike',26,'kolkata');
console.log(mm);
mm.getAge();
const nn = new Traveller();
nn.getAge();
// console.log(nn);