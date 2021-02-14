

function Person(name, color) {
    this.name = name; 
    this.color = color; 
    
    this.speak = function() {
        console.log(`${name} say they like the color ${color}`);  
    }

}

let person1 = new Person("Jessica",  'brown');
let person2 = new Person('Sam', 'green');

let personsArray = [person1, person2]

for(let i = 0; i < personsArray.length; i++) {
    personsArray[i].speak();
}

