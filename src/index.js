const numbers = [1, 2, 3];

const index = numbers.indexOf(2);
const added = [
  ...numbers.slice(0, index),
  4,
  ...numbers.slice(index)
];

const removed = numbers.filter(n => n !== 2);

const updated = numbers.map(n => n === 2 ? 20 : n);
console.log(updated);
