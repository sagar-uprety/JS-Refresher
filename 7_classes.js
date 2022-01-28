class Human {
  constructor() {
    this.gender = "Male";
    this.home = "Earth";
    this.name = "Ricky";
  }

  display() {
    console.log("Parent Class");
    console.log(this.home);
  }

  speak() {
    console.log("Hello Son!");
  }
}

class Person extends Human {
  constructor() {
    super(); //call parent constructor
    this.name = "Sagar"; //overrides parent property
  }

  display() {
    // super.display(); //call parent method
    console.log("child class");
    console.log(this.name);
  }
}

const person1 = new Person();
person1.display(); //?child method takes precedence?
person1.speak();
console.log(person1.name); //child -> Sagar takes precedence
console.log(person1.home);
