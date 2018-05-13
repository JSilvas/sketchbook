const dragons = [
  'fat dragon',
  'baby dragon',
  'angry dragon',
  'pointy drake',
  'wobbly wyvern'
]

const iterator = dragons[Symbol.iterator]() 

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


for (const dragon of dragons) {
  dragon
}

for (const char of dragons[0]) {
  console.log(char.charCodeAt(0))
}
