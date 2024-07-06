let guestslist: string[] = ["Nayyar", "Hamza", "Arshad"];
console.log("\nSending initial invitations:");
for (let guest of guestslist) {
  console.log(`I invite ${guest} to dinner.`);
}
let absentGuest: string = "Hamza";

console.log(`Unfortunately, ${absentGuest} won't be able to attend due to an important engagement.`);

guestslist.splice(1, 1, "Asher"); 

console.log("\nSending new invitations:");
for (let guest of guestslist) {
  console.log(`I invite ${guest} to dinner.`);
}
