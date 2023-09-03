const Person = {
    firstName: 'Alvin',
    lastName: 'Mwaura',
    age: 19,
    email: 'alvira@outlook.com',
    hobbies: ['music', 'sport'],
    address: {
        city: 'Westlands',
        state: 'NB'
    },
    getBirthYear: function(){
        return 2023 - this.age
    }
}

let val
val = Person

// Get a specific property
val = Person.firstName
val= Person ['firstName']
val = Person.age
val = Person.email
val = Person.hobbies
val = Person.hobbies[1]
val = Person.address
val = Person.address.state
val = Person.getBirthYear()

console.log(val)


console.log(Person)
