function Order_Sandwich(items:string[])
{
   console.log("------------ | Summary's of items on Ordered Sandwitch | ---------------\n");
   for(let i of items)
    {
        console.log(i);
    }
   
}
console.log("\nSandwitch 1:\n");
Order_Sandwich(["Olive", "Cabage","Gralic Sauces","White Bread"]);
console.log("\nSandwitch 2:\n");
Order_Sandwich(["Tomatoes","Lettuce","Onions","Peppers"])
console.log("\nSandwitch 3:\n");
Order_Sandwich(["Seedy Italian Bread","vinegar-drenched shredded lettuce","sliced onions","salami"]);
