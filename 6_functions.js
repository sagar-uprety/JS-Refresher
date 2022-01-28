//nami can be written without parenthesis. i.e when only 1 args
display = (nami) => {
  console.log(nami);
};

//or 1 liner if only 1 operation
display2 = (nami) => console.log(nami);

display("hello");
display2("hello");

calc = (a, b) => {
  console.log(a + b);
  return a + b;
};

result = calc(4, 5);
console.log(`The sum is ${result}`);
