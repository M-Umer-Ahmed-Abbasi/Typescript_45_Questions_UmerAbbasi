var guestslist = ["Nayyar", "Hamza", "Arshad"];
console.log("\nSending initial invitations:");
for (var _i = 0, guestslist_1 = guestslist; _i < guestslist_1.length; _i++) {
    var guest = guestslist_1[_i];
    console.log("I invite ".concat(guest, " to dinner."));
}
var absentGuest = "Hamza";
console.log("Unfortunately, ".concat(absentGuest, " won't be able to attend due to an important engagement."));
guestslist.splice(1, 1, "Asher");
console.log("\nSending new invitations:");
for (var _a = 0, guestslist_2 = guestslist; _a < guestslist_2.length; _a++) {
    var guest = guestslist_2[_a];
    console.log("I invite ".concat(guest, " to dinner."));
}
