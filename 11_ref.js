//Primitive Types. string, num, bool

const num = 2;
const num2 = num; //copies actual value

console.log(num2);

//Array and Object - Reference Type
const person = {
  name: "Sagar",
};

const newPerson = person; //reference is made. not actual copy. pointing to same location (obj)
console.log(newPerson);

newPerson.age = 21;
console.log(person);

//to actually create an immutable copy

const person1 = { ...person };
person1.name = "Ricky";
console.log(person1);
console.log(person);
