var GuestsList = ["Nayyar", "Hamza", "Arshad"];
console.log("\nSending initial invitations:");
for (var _i = 0, GuestsList_1 = GuestsList; _i < GuestsList_1.length; _i++) {
    var guest = GuestsList_1[_i];
    console.log("I invite ".concat(guest, " to dinner."));
}
var AbsentGuest = "Hamza";
console.log("\nUnfortunately, ".concat(AbsentGuest, " won't be able to attend the dinner due to an important engagement. We'll miss them!"));
GuestsList.splice(1, 1, "Asher");
console.log("\nSending new invitations:");
for (var _a = 0, GuestsList_2 = GuestsList; _a < GuestsList_2.length; _a++) {
    var guest = GuestsList_2[_a];
    console.log("I invite ".concat(guest, " to dinner."));
}
console.log("\nGreat news! We found a bigger dinner table, so we can invite more guests.");
GuestsList.unshift("Ali");
GuestsList.splice(2, 0, "Maroof");
GuestsList.push("Tariq");
console.log("\nSending new invitations to the expanded guest list:");
for (var _b = 0, GuestsList_3 = GuestsList; _b < GuestsList_3.length; _b++) {
    var guest = GuestsList_3[_b];
    console.log("Hi ".concat(guest, ", since we found a bigger table, we'd love for you to join us for dinner!"));
}
