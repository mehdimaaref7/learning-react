//class definition 
class Developer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return this.firstName + ' ' + this.lastName;
    }
}

// class instanciation 
let robin = new Developer('Robin', 'Wieruch');
console.log(robin.getName());

const dennis = new Developer('Dennis', 'Wieruch');
console.log(dennis.getName());