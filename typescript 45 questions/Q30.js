var User_list = ["Fawwad Khan", "Abdullah", "Admin", "Ali"];
User_list.forEach(function (element) {
    if (element === "Admin") {
        console.log("Hello ".concat(element, ", thank you for logging in again."));
        console.log("Hello ".concat(element, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(element, ", thank you for logging in again."));
    }
});
