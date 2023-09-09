// FOR LOOP -> the number of iteration is known

for(let i = 0; i < 10; i++){
    if(i == 2){
        console.log('2 is my favorite number')
        continue;
    }
    if ( i == 5){
        console.log('Stop the loop')
        break;

    }
    console.log(`${i}`)
}

// WHILE LOOP -> the number of iteration is unclear

let j = 0
while(j< 10){
    console.log('Number ' + j)
    j++
}

// DO WHILE

let i = 0
do {
    console.log('Number '+ 1)
    i++
}
while(i < 10)


const cars = ['Ford', 'Cherry', 'Honda', 'Bugatti']

for(let i = 0; i < cars.length; i++){
    console.log(cars[i])
}

// FOREACH-> best for arrays
cars.forEach(function(car, index){
    console.log(`${index}:${car}`)
});


// MAP
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Alvin'},
    {id: 3, name: 'Sarah'},    
]

const ids = users.map(funtion(user{
    return users.id
}))

console.log(ids)

//FOR_IN loop
const user = {
    firstName: 'John',
    lastName: 'Ling',
    age: 40,
}

for(let x in user){
    console.log(`${x} : ${user[x]}`)
}