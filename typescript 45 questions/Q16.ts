let GuestsList: string[] = ["Nayyar", "Hamza", "Arshad"];

console.log("\nSending initial invitations:");
for (let guest of GuestsList) {
  console.log(`I invite ${guest} to dinner.`);
}
let AbsentGuest: string = "Hamza";
console.log(`\nUnfortunately, ${AbsentGuest} won't be able to attend the dinner due to an important engagement. We'll miss them!`);

GuestsList.splice(1, 1, "Asher"); 

console.log("\nSending new invitations:");
for (let guest of GuestsList) {
  console.log(`I invite ${guest} to dinner.`);
}

console.log("\nGreat news! We found a bigger dinner table, so we can invite more guests.");

GuestsList.unshift("Ali"); 
GuestsList.splice(2, 0, "Maroof"); 
GuestsList.push("Tariq"); 

console.log("\nSending new invitations to the expanded guest list:");
for (let guest of GuestsList) {
    console.log(`Hi ${guest}, since we found a bigger table, we'd love for you to join us for dinner!`);
}
