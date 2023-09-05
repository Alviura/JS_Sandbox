// FUNCTION DECLARATION

function greet(firstname, lastname){
    return 'Hello' + firstname +  ' ' + lastname
}
console.log(greet())

// FUNCTION EXPRESSION
const square = function(x){
    return x*x
}
console.log(square(3))

// IMMIDIATELY INNVOKABLE FUNCTION EXPRESSION - IIFE -> A function that you declare and run at the same time

(function(){
    console.log('IIFE Run..')
})()

(function(name){
    console.log(`Hello ` + ${name})
})(Brad)

// METHOD -> functions in an object
const todo = {
    add: function(){
        console.log('Add todo')
    },
    edit: function(id){
        console.group('Edit todo ${id}')
    }
}
todo.add()
todo.edit(22)