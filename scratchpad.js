
const pets = ['Mr. Mittens', 'DemiDog', 'Smol Cat', 'Good Pupper'];

let answer = 'Smol Cat';

for(let i = 0; i < 5; i++) {
  if ()
}


// Global Scope
var a = 1;

// Function Scope
function changeVal() {
  a = 2;

  var b = 3;

  return console.log(a);
}


console.log(a);

changeVal();

console.log(a);

console.log(b);