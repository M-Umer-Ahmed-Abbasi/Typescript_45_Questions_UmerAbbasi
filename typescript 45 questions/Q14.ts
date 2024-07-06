let guests: string[] = ["Nayyar", "Hamza", "Arshad"];

function invitationTemplate(guest: string): string { return `Dear ${guest}, you are cordially invited to a dinner party. It would be an honor to discuss science and innovation with you. Please RSVP at your earliest convenience.`; }

for (let guest of guests) {
  let invitation: string = invitationTemplate(guest);
  console.log(invitation);
}
