// sets this is undefined
// "use strict";

function test() {
  // "use strict";
  console.log(this === undefined);
  //In CJS this refers to global
  console.log(this === global);
}

test();

//Constructor Functions. We can't assign values to undefined. (which is the case in strict mode) - avoid creating golval vars
function Person(name, rollNo) {
  this.name = name;
  this.rollNo = rollNo;
}

// const person = Person("Sagar", 58); // this sets up global vars.
const person = new Person("Sagar", 58); // this if
// console.log(person);
console.log(person.name);

//When used strict mode. We can't access as this
// console.log(this.name); //this is global
// console.log(this.rollNo);

// If "use strict" , we can't assign something to thats not defined. Hence undefined
/* console.log(global.name);
console.log(global.rollNo); */
