const Describe_City=(city_name: string, city_country:string)=>
{
    console.log(` ${city_name} is in ${city_country}`);
}
console.log("----------------- | City 1| ---------------\n");
Describe_City("Mumbai","India");
console.log("\n----------------- | City 2| ---------------\n");
Describe_City("Paris","France");
let city="Istanbul";
let Country="Turkiea";

console.log("\n----------------- | City 3| ---------------\n");
Describe_City(city,Country);
