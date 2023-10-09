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

//TIme complexity of push, pop, shift, unshift is O(1)
//Time complexity of for of is O(n)
//Time complexity of for in is O(n)
//Time complexity of for is O(n)
//Time complexity of forEach is O(n)
//Time complexity of map is O(n)
//Time complexity of filter is O(n)
//Time complexity of reduce is O(n)
//Time complexity of some is O(n)
//Time complexity of every is O(n)
//Time complexity of find is O(n)
//Time complexity of findIndex is O(n)
//Time complexity of includes is O(n)
//Time complexity of indexOf is O(n)
//Time complexity of lastIndexOf is O(n)
//Time complexity of join is O(n)
//Time complexity of slice is O(n)
//Time complexity of splice is O(n)
//Time complexity of sort is O(n)
//Time complexity of reverse is O(n)
//Time complexity of fill is O(n)
//Time complexity of copyWithin is O(n)
//Time complexity of findLastIndex is O(n)
//Time complexity of findLast is O(n)
