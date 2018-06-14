// const dragons = [
//   'fat dragon',
//   'baby dragon',
//   'angry dragon',
//   'pointy drake',
//   'wobbly wyvern'
// ]

// const iterator = dragons[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// // 
// for (const dragon in dragons) {
//   console.log(dragon);
// }

// for (const dragon of dragons) {
//   console.log(dragon);
// }

// for (const char in dragons[0]) {
//   console.log(char.charCodeAt(0));
// }

// for (const char of dragons[0]) {
//   console.log(char.charCodeAt(0));
// }




const dragons = [
  'fat dragon',
  'baby dragon',
  'angry dragon',
  'pointy drake',
  'wobbly wyvern'
]

const iterator = dragons[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// dragon is the iterator
for (const dragon in dragons) {
  console.log(dragon);
}

for (const dragon of dragons) {
  console.log(dragons);
  console.log(dragon);
}

for (const char in dragons[0]) {
  console.log(char.charCodeAt(0));
}

for (const char of dragons[0]) {
  console.log(char.charCodeAt(0));
}