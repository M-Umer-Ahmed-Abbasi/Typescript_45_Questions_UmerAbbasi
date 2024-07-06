var Guestslist = ["Nayyar", "Hamza", "Arshad"];
console.log("\nSending initial invitations:");
for (var _i = 0, Guestslist_1 = Guestslist; _i < Guestslist_1.length; _i++) {
    var guest = Guestslist_1[_i];
    console.log("I invite ".concat(guest, " to dinner."));
}
var Absentguest = "Hamza";
console.log("\nUnfortunately, ".concat(Absentguest, " won't be able to attend the dinner due to an important engagement. We'll miss them!"));
Guestslist.splice(1, 1, "Asher");
console.log("\nSending new invitations:");
for (var _a = 0, Guestslist_2 = Guestslist; _a < Guestslist_2.length; _a++) {
    var guest = Guestslist_2[_a];
    console.log("I invite ".concat(guest, " to dinner."));
}
console.log("\nGreat news! We found a bigger dinner table, so we can invite more guests.");
Guestslist.unshift("Ali");
Guestslist.splice(2, 0, "Maroof");
Guestslist.push("Tariq");
console.log("\nSending new invitations to the expanded guest list:");
for (var _b = 0, Guestslist_3 = Guestslist; _b < Guestslist_3.length; _b++) {
    var guest = Guestslist_3[_b];
    console.log("Hi ".concat(guest, ", since we found a bigger table, we'd love for you to join us for dinner!"));
}
console.log("\nUnfortunately, the new dinner table won't arrive in time. We can only invite two guests for dinner.");
while (Guestslist.length > 2) {
    var removedGuest = Guestslist.pop();
    if (removedGuest) {
        console.log("Unfortunately, ".concat(removedGuest, ", due to space limitations, we can't invite you to dinner this time. We apologize for the inconvenience."));
    }
}
console.log("\nThe remaining guests who are still invited are:");
for (var _c = 0, Guestslist_4 = Guestslist; _c < Guestslist_4.length; _c++) {
    var guest = Guestslist_4[_c];
    console.log("".concat(guest, ", you're still invited to dinner!"));
}
Guestslist.pop();
Guestslist.pop();
console.log("\nFinal Guest List (should be empty):", Guestslist);
