function Person(firstName, rollNo) {
  //   console.log(this);
  this.firstName = firstName;
  //   console.log(this);
  this.rollNo = rollNo;
  //   console.log(this);

  //We have to return object at all cost. Otherwise this is returned as fallback
  //return(this) // Person constructor autmatically returns this object.

  //We an also set other object as (not usual). But we cant return things like null

  return {
    firstName: "Harry",
    height: 6,
  };
}

const person1 = new Person("Sagar", 58);
console.log(person1);
