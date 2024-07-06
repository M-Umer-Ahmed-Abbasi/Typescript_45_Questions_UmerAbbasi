var array_cities = [
    "Karachi",
    "Peshawar",
    "Islamabad",
    "Hyderabad",
    "Mumbai",
];
var array_rivers = ["Indus", "Ravi", "River Kabul", "Amazon"];
var array_Mountain = [
    "K2",
    "Nanga Perbet",
    "Mount Everset",
    "Koh Hindukash",
];
console.log("Array Of Cities:", array_cities);
console.log("Array Of rivers:", array_rivers);
console.log("Array Of Mountain:", array_Mountain);
var List_of_allItems = [];
List_of_allItems = List_of_allItems.concat(array_Mountain, array_rivers, array_cities);
console.log("Combined array Of Cities,Rivers,Mountain Arrays': ", List_of_allItems);
