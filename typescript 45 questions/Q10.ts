// Author: Muhammad Umer Ahmed Abbasi - 2024-07-06
// This program stores a favorite number and creates a message revealing it.

let favNum: number = 3;  // Replace 3 with your actual favorite number

let mssg: string = `My favorite number is ${favNum}.`;
console.log(mssg);

// Author: Muhammad Umer Ahmed Abbasi - 2024-07-06
// This program demonstrates stripping whitespace characters from a name.

let nameWithoutTrimmed: string = "\t\n\tUmer\n\t";

// Print the name with whitespace
console.log("Name with whitespace:", nameWithoutTrimmed);

// Strip whitespace using trim()
let TrimmedName: string = nameWithoutTrimmed.trim();

// Print the stripped name
console.log("Stripped name:", TrimmedName);
