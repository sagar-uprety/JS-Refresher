const arr = [1, 2, 4];

//Map returns a new array
const tripleArr = arr.map((num) => {
  return num * 3;
});

console.log(tripleArr);

//in map, first arg is the item and second is index
const tripleArr2 = arr.map((num, index) => {
  console.log(index);
  return num * 3;
});

console.log(tripleArr2);
/* let newArray = [];
tagsArray.map((tag) => {
  newArray.push(tag);
});
console.log(typeof newArray);
 */
