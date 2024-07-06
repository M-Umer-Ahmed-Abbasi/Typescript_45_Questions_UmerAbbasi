//This Problem Sovlve can solve by using map function but I solve by Nested loop using two address techniques
let Current_user: string[] = ["Fawwad", "Qasim", "Zulfiqar", "Adnan", "Ibrar"];
let New_user: string[] = ["ADNAN", "Fahad", "Alam", "Fawwad", "Zaman"];

console.log("Current user: ", Current_user)
console.log("\nNew user: ", New_user,"\n");
for (let i = 0; i < New_user.length; i++) {
  for (let j = 0; j < Current_user.length; j += 2) {
    if (
      Current_user[j].toUpperCase() === New_user[i].toUpperCase()
    ) {
      console.log(
        New_user[i] +
          " is already in the list, so person will need to enter new usre name\n"
      );
      break;
    }else if((j+1 < Current_user.length)&&( Current_user[j + 1].toUpperCase() === New_user[i].toUpperCase()))
    {
        console.log(
            New_user[i] +
              " is already in the list, so person will need to enter new usre name\n"
          );
          break;
    }else if(j===Current_user.length - 1 ||j===Current_user.length -2)
        {
            console.log(New_user[i] + " username is available\n");
        }
  }
}
