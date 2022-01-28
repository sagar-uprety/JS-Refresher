// <Variables>

//old way..globally scoped..conflict may occur
var names = "Sagar";
var names = "Pizza"; //can redeclare

console.log(names);

//new way
let rockstar = "Elon Musk";
// let rockstar = "test"; //cannot redeclare..
rockstar = "test"; //but can update
console.log(rockstar);

const newName = "Sagar Uprety";
// newName = "Dipesh Shrestha"; //cannot update as well
console.log(newName);

// </Variables>

// ------------------------------------

// <DataTypes> String, Nums, Boolean, null, undefined

let num1 = 5;
let num2 = 10.68;
console.log(num1 + num2);

const isHappy = true;
console.log(isHappy);

let pretty = undefined;
console.log(typeof (pretty + num1)); //number
console.log(pretty + num1); //NaN

let strong = null;
console.log(typeof strong); //object

let test = "Name";
//old way of concatenation
console.log(strong + num2 + " " + test); //num2 test
console.log(typeof (strong + num2 + " " + test)); //string

//template literals --better concatenation
console.log(`Hey there.. Your score is ${num2 + num1}`);

// </DataTypes>

// ------------------------------------

// <StringMethods>

let test2 = "Name";
console.log(test2.toUpperCase());
console.log(test2.substring(1, 3).toUpperCase());

let tags = "tech, sports, politics";
let tagsArray = tags.split();
console.log(tagsArray);
console.log(typeof tagsArray);

// </StringMethods>
