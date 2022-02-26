array = [4, 5, 6, 7];

//for loops //4,5,6,7
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//for in loop //4,5,6,7
for (x in array) {
  console.log(array[x]);
}

//12,15,18,21
array.forEach((element) => {
  console.log(element * 3);
});

//4,5,6,7
for (const i of array) {
  console.log(i);
}

// -------------------

/* 
// while loops
let y = 10;
while (y < 100) {
  console.log(y);
  y++;
} */

/* 
let t = 10;
do {
  console.log(`Hello ${t}`);
  t++;
} while (t < 100); */

// -------------------
