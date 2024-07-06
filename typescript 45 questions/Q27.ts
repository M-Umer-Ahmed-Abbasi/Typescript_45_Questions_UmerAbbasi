function Result(x: string) {
  if (x === "green") {
    console.log(`Aliean Color is ${x}: You earned 5 points`);
  } else if (x === "yellow") {
    console.log(`Aliean Color is ${x}: You earned 10 points`);
  } else if (x === "red") {
    console.log(`Aliean Color is ${x}: You earned 15 points `);
  } else {
    console.log(
      `Aliean Color is ${x}: Alien color is different there are not result`
    );
  }
}

console.log("--------| Test 1 | ---------------");
let alien_color: string = "green";
Result(alien_color);
console.log("--------| Test 2 | ---------------");
alien_color = "yellow";
Result(alien_color);
console.log("--------| Test 3 | ---------------");
alien_color = "red";
Result(alien_color);
