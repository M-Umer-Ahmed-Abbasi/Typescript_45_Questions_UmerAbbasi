var Result = function (x) {
    if (x === "green") {
        console.log("Aliean Color is ".concat(x, ": You earned 5 points"));
    }
    else if (x === "yellow") {
        console.log("Aliean Color is ".concat(x, ": You earned 10 points"));
    }
    else if (x === "red") {
        console.log("Aliean Color is ".concat(x, ": You earned 15 points "));
    }
    else {
        console.log("Aliean Color is ".concat(x, ": Alien color is different there are not result"));
    }
};
console.log("--------| Test 1 | ---------------");
var alien_color = "green";
Result(alien_color);
console.log("--------| Test 2 | ---------------");
alien_color = "yellow";
Result(alien_color);
console.log("--------| Test 3 | ---------------");
alien_color = "red";
Result(alien_color);
