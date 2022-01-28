const arr = [1, 3, 2, 0];

const obj = {
  name: "Sagar",
  aray: [11, 22, 33],
};

//@Spread Operator

//copying and/or add new elements to array
const newArr = [...arr, 5, 10, 1]; //breaks into individual element
console.log(newArr);

//copying and/or add new elements to object
const newObj = { ...obj, food: "Pizza" };
console.log(newObj);

//@Rest Operator - functions with unknown no of args - array

const filter = (...args) => {
  console.log(args);
  return args.filter((element) => element === 10);
};

console.log(filter(2, 1, 31, 10, 2, 10));
