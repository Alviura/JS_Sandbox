const firstName = 'Alvin';
const lastName = 'Mwaura';
const str = 'Hello there I\'m Alvin';
const tags = 'Web design, Web dev, Web master';
let val;


// Concatinate
val = firstName + ' ' +lastName;
console.log(val)

// Append
val = 'Alvin ';
val += 'Mwaura';
console.log(val)

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length - Its a property
val = firstName.length;
console.log(val)

//concat method;
val = firstName.concat(' ', lastName);

// Change Case
val = firstName.toUpperCase();
val = lastName.toLowerCase();
console.log(val)

val = firstName[2];
console.log(val)

//indexOf() -> returns position of a character in a string
val = firstName.indexOf('v');
val = firstName.lastIndexOf('v');
console.log(val)

// charAt() -> returns the value of the index in a string
val = firstName.charAt('2');
console.log(val)
// Get last char
val = firstName.charAt(firstName.length - 1);
console.log(val)

// subString()
val = firstName.substring(0,4);
console.log(val)

// slice() - mostly used for pulling things out in an Array
val = firstName.slice(0,4);
val = firstName.slice(-3); // slice the last 3 characters
console.log(val)

// split -> Split a string into an Array based on a separator
/*
A separotor can be:
- whitespace
- punctiation character like a comma
*/
val = str.split(' '); // spliting variable str by spaces
val = tags.split(','); // splitting variable tags by comma
console.log(val)

// replace
val = str.replace("Hello", "Alvin");
console.log(val)