class Human {
  gender = "Male";
  home = "Earth";
  name = "Ricky";

  display = () => console.log(this.gender);
  speak = () => console.log("Hello Son!");
}

class Person extends Human {
  name = "Sagar"; //overrides parent property
  display = () => {
    // super.display(); //!not working
    console.log(this.name);
  };
}

const person1 = new Person();
person1.display(); //?child method takes precedence?
person1.speak();
console.log(person1.name); //child -> Sagar takes precedence
console.log(person1.home);
