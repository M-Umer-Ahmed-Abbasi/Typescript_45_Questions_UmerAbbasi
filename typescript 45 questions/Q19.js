var guesTs = ["Nayyar", "Hamza", "Arshad"];
function InvitationTemplate(guest) {
    return "Dear ".concat(guest, ", you are cordially invited to a dinner party. It would be an honor to discuss science and innovation with you. Please RSVP at your earliest convenience.");
}
console.log("\nI am inviting", guesTs.length, "people to dinner.");
for (var _i = 0, guesTs_1 = guesTs; _i < guesTs_1.length; _i++) {
    var guest = guesTs_1[_i];
    var invitation = InvitationTemplate(guest);
    console.log(invitation);
}
