// Basic structure of defining Arrays
const numbers = [43,56,33,12,45,67]

// Using Array constructor
const numbers2 = new Array(22,43,56,78,99)

// Array of Strings
const fruit = ['Apple', 'Banana', 'Pear']

// Array of mixed types
const mixed = [34, 'Hello', true, undefined, null, {a:1, b:1}, new Date()]

let val;

// Get length of Array
val = numbers.length

// Check if is Array
val = Array.isArray(numbers)

// Get single value in Array
val = numbers[3]
val = numbers[0]

// Insert a value into an Array
numbers[6] = 100

// Find Index of a value
val = numbers.indexOf(67)

// MUTATING ARRAYS
    // Add on to end
    numbers.push(250)
    // add to front
    numbers.unshift(120)
    // Take off from end
    numbers.pop()
    // Take off from front
    numbers.shift()
    // Splice values
    numbers.splice(1,1)
    // Reverse the Array
    numbers.reverse()

// Concatenate Arrays
val = numbers.concat(numbers2)

// Sorting Arrays
    val = fruit.sort()
    val = numbers.sort() //sorts in descending order

    // Using the "compare function" // sorts the numbers in ascending order
    val = numbers.sort(function(x, y){
        return x - y
    })

    // Reverse sort
    val = numbers.sort(function(x, y){
        return y - x
    })

// Find
function under50(num){
    return num < 50
}
val = numbers.find(under50)

console.log(numbers)
console.log(val)

