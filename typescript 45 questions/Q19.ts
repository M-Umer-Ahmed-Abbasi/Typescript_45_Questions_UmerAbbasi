let guesTs: string[] = ["Nayyar", "Hamza", "Arshad"];

function InvitationTemplate(guest: string): string {
  return `Dear ${guest}, you are cordially invited to a dinner party. It would be an honor to discuss science and innovation with you. Please RSVP at your earliest convenience.`;
}

console.log("\nI am inviting", guesTs.length, "people to dinner.");

for (let guest of guesTs) {
  let invitation: string = InvitationTemplate(guest);
  console.log(invitation);
}
