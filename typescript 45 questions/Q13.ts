let favoriteTransports: string[] = ["Honda-125 Motorbike", "Toyota Prius", "Buggati"];

let statements: string[][] = [];

for (let transport of favoriteTransports) {
  statements.push([
    `I would like to own a ${transport}.`,
    `I would like to modify my ${transport}.`,
    `I would like to ride my ${transport} at night.`,
  ]);
}
for (let i = 0; i < favoriteTransports.length; i++) {
  console.log(`\nStatements about ${favoriteTransports[i]}:`);
  for (let statement of statements[i]) {
    console.log(statement);
  }
}
