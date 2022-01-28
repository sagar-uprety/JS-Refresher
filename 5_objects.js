//basic object
const person = {
  name: "Sagar",
  age: 30,
  stack: ["MongoDB", "Express", "Vue.Js", "Node.Js"],
  address: {
    street: "Bibhuti Janak Marg",
    city: "New Baneshwor",
    ward: 31,
  },
};

// console.log(person);
console.log(person.stack[2]);

person.email = "sagarupreti100@gmail.com";
console.log(person.email);

//destructuring --setting up variables from objects -- ES6
const {
  age,
  address: { city },
} = person;

console.log(`Age is ${age} and your city is ${city}`);

const person2 = person;
console.log(person2.name);

//Array of objects
const posts = [
  {
    id: 1,
    title: "Sports",
  },
  {
    id: 2,
    title: "Entertaintment",
  },
];

console.log(posts[1].title);

//converts to JSON string
const postJSON = JSON.stringify(posts);
console.log(postJSON);
console.log(typeof postJSON);

//converts JSON String to JS Object
const object = JSON.parse(postJSON);
console.log(object);
console.log(typeof object);
