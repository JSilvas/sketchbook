let a = 2;
let b = 3;

let func1 = (a,b) => {
  return a + b;
}
let func2 = (a,b) => { a + b; }
let func3	= (a,b) => { return a + b; }
let func4	= (a,b) => a + b;

console.log(func1(a,b));  // 5
console.log(func2(a,b));  // undefined
console.log(func3(a,b));  // 5
console.log(func4(a,b));  // 5