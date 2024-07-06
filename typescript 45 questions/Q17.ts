let Guestslist: string[] = ["Nayyar", "Hamza", "Arshad"];

console.log("\nSending initial invitations:");
for (let guest of Guestslist) {
  console.log(`I invite ${guest} to dinner.`);
}
let Absentguest: string = "Hamza";
console.log(`\nUnfortunately, ${Absentguest} won't be able to attend the dinner due to an important engagement. We'll miss them!`);

Guestslist.splice(1, 1, "Asher"); 

console.log("\nSending new invitations:");
for (let guest of Guestslist) {
  console.log(`I invite ${guest} to dinner.`);
}

console.log("\nGreat news! We found a bigger dinner table, so we can invite more guests.");

Guestslist.unshift("Ali"); 
Guestslist.splice(2, 0, "Maroof"); 
Guestslist.push("Tariq"); 

console.log("\nSending new invitations to the expanded guest list:");
for (let guest of Guestslist) {
    console.log(`Hi ${guest}, since we found a bigger table, we'd love for you to join us for dinner!`);
}

console.log("\nUnfortunately, the new dinner table won't arrive in time. We can only invite two guests for dinner.");

while (Guestslist.length > 2) {
  let removedGuest = Guestslist.pop();
  if (removedGuest) { 
    console.log(`Unfortunately, ${removedGuest}, due to space limitations, we can't invite you to dinner this time. We apologize for the inconvenience.`);
  }
}

console.log("\nThe remaining guests who are still invited are:");
for (let guest of Guestslist) {
  console.log(`${guest}, you're still invited to dinner!`);
}

Guestslist.pop();
Guestslist.pop();
console.log("\nFinal Guest List (should be empty):", Guestslist);