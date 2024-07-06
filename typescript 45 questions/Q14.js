var guests = ["Nayyar", "Hamza", "Arshad"];
function invitationTemplate(guest) { return "Dear ".concat(guest, ", you are cordially invited to a dinner party. It would be an honor to discuss science and innovation with you. Please RSVP at your earliest convenience."); }
// Print invitations
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    var invitation = invitationTemplate(guest);
    console.log(invitation);
}
