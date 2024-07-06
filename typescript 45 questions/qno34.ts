let Kind_of_Pizzas: string[] = [
  "Cheese Pizza",
  "BBQ Chicken Pizza",
  "Veggi Pizza",
];

console.log("------------- | Kindes Of Pizzas | ----------------");
Kind_of_Pizzas.forEach((element) => {
  console.log(element);
});

console.log("\n--------------- | Print The Pizza With Statment | --------------");

Kind_of_Pizzas.forEach((item)=>{
    console.log("I Like ",item);
})

console.log("\nI really un-like Pizza");