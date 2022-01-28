const arr = [1, 2, 4, 5, 11];

const obj = {
  namey: "Sagar",
  address: "Kathmandu",
};

//Destructuring. creating vars/properties from exisiting array/obj

//Array Destructuring
const [num1, num2] = arr;
console.log(num1, num2);

//Object Destructuring
const { namey } = obj;
console.log(namey);
