let array_cities: string[] = [
  "Karachi",
  "Peshawar",
  "Islamabad",
  "Hyderabad",
  "Mumbai",
];
let array_rivers: string[] = ["Indus", "Ravi", "River Kabul", "Amazon"];
let array_Mountain: string[] = [
  "K2",
  "Nanga Perbet",
  "Mount Everset",
  "Koh Hindukash",
];
console.log("Array Of Cities:", array_cities);
console.log("Array Of rivers:", array_rivers);
console.log("Array Of Mountain:", array_Mountain);
let List_of_allItems: Array<string> = [];
List_of_allItems = List_of_allItems.concat(
  array_Mountain,
  array_rivers,
  array_cities
);
console.log(
  "Combined array Of Cities,Rivers,Mountain Arrays': ",
  List_of_allItems
);