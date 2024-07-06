
const animals: string[] = ["Dog", "Cat", "Rabbit"];

for(const animal in animals) {
    console.log(animals[animal]);
}

for (const animal of animals) {
  console.log(`${animal} would make a great pet!`);
}

console.log("All of these animals are friendly and make great companions!");
