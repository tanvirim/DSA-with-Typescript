const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);

for (const a of array) {
  console.log(a);
}

array.push(11);
console.log('push', array);

array.pop();
console.log('pop', array);

array.shift();
console.log('shift', array);

array.unshift(11);
console.log('unshift', array);
