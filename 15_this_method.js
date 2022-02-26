const person = {
  firstName: "Sagar",
  sayHello() {
    console.log(`Hey, I am ${ .firstName}`);
  },
  /*  sayHello: () => {
    console.log(`Hey, I am ${this.firstName}`);
  }, */
};

person.sayHello(); //this inside sayHello is person obj

// foo.bar.person.sayHello(); //this referes to immediate left term i.e person
