let Favorite_Fruits : string[] = ["Mango", "Banana", "Orange"];
// if(Favorite_Fruits.includes("Mango")){
//     console.log("You really like Mango");
// }else {
//     console.log("Mango is not Include in your favorites fruits list");
// }

// Another Way To solve this problem
Favorite_Fruits.forEach(element => {
    if(element == "Mango"){
        console.log("You really like Mango");
    }else{
        console.log("Mango is not Include in your favorites fruits list");
    }
});
