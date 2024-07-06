let travelList: string[] = ["Greenland", "Iceland", "America", "Saudia Arab", "Malaysia"];

console.log("\nOriginal Travel List:");
for (let destination of travelList) {
  console.log(destination);
}

let sortedList = travelList.slice(); 
sortedList.sort();
console.log("\nTravel List Sorted Alphabetically (Copy):");
for (let destination of sortedList) {
  console.log(destination);
}
console.log("\nOriginal Travel List (Unmodified):");
for (let destination of travelList) {
  console.log(destination);
}

sortedList = travelList.slice(); 
sortedList.sort().reverse();
console.log("\nTravel List Sorted Reverse Alphabetically (Copy):");
for (let destination of sortedList) {
  console.log(destination);
}

console.log("\nOriginal Travel List (Unmodified):");
for (let destination of travelList) {
  console.log(destination);
}

travelList.reverse();
console.log("\nTravel List Reversed:");
for (let destination of travelList) {
  console.log(destination);
}

travelList.reverse();
console.log("\nTravel List Back to Original Order:");
for (let destination of travelList) {
  console.log(destination);
}

travelList.sort();
console.log("\nTravel List Sorted Alphabetically (Original Modified):");
for (let destination of travelList) {
  console.log(destination);
}

travelList.sort().reverse();
console.log("\nTravel List Sorted Reverse Alphabetically (Original Modified):");
for (let destination of travelList) {
  console.log(destination);
}
