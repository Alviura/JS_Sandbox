const name = 'John';
const age = 30;
const job = 'DevOps';
const city = 'Nairobi';
let html;

// Without tempalte strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>'+
        '</ul>';

function hello(){
    return 'hello';
}
        
// With template strings (es5)
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${hello()}</li>}
    </ul>
`;

document.body.innerHTML = html;