var animals = ["Dog", "Cat", "Rabbit"];
for (var animal in animals) {
    console.log(animals[animal]);
}
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log("".concat(animal, " would make a great pet!"));
}
console.log("All of these animals are friendly and make great companions!");
