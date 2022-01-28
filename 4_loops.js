array = [4, 5, 6, 7];

//for loops
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (x in array) {
  console.log(array[x]);
}

array.forEach((element) => {
  console.log(element);
});

for (const i of array) {
  console.log(i);
}

// -------------------

// while loops
let y = 10;
while (y < 100) {
  console.log(y);
  y++;
}

let t = 10;
do {
  console.log(`Hello ${t}`);
  t++;
} while (t < 100);

// -------------------
