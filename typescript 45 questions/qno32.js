var Current_user = ["Fawwad", "Qasim", "Zulfiqar", "Adnan", "Ibrar"];
var New_user = ["ADNAN", "Fahad", "Alam", "Fawwad", "Zaman"];
for (var i = 0; i < New_user.length; i++) {
    for (var j = 0; j < Current_user.length; j += 2) {
        if (Current_user[j].toUpperCase() === New_user[i].toUpperCase()) {
            console.log(New_user[i] +
                " is already in the list, so person will need to enter new usre name\n");
            break;
        }
        else if ((j + 1 < Current_user.length) && (Current_user[j + 1].toUpperCase() === New_user[i].toUpperCase())) {
            console.log(New_user[i] +
                " is already in the list, so person will need to enter new usre name\n");
            break;
        }
        else if (j === Current_user.length - 1 || j === Current_user.length - 2) {
            console.log(New_user[i] + " username is available\n");
        }
    }
}
