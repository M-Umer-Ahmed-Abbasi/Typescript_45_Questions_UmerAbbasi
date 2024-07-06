var Favorite_Fruits = ["Mango", "Banana", "Orange"];
// if(Favorite_Fruits.includes("Mango")){
//     console.log("You really like Mango");
// }else {
//     console.log("Mango is not Include in your favorites fruits list");
// }
// Another Way To solve this problem
Favorite_Fruits.forEach(function (element) {
    if (element == "Mango") {
        console.log("You really like Mango");
    }
});
