var travelList = ["Greenland", "Iceland", "America", "Saudia Arab", "Malaysia"];
console.log("\nOriginal Travel List:");
for (var _i = 0, travelList_1 = travelList; _i < travelList_1.length; _i++) {
    var destination = travelList_1[_i];
    console.log(destination);
}
var sortedList = travelList.slice();
sortedList.sort();
console.log("\nTravel List Sorted Alphabetically (Copy):");
for (var _a = 0, sortedList_1 = sortedList; _a < sortedList_1.length; _a++) {
    var destination = sortedList_1[_a];
    console.log(destination);
}
console.log("\nOriginal Travel List (Unmodified):");
for (var _b = 0, travelList_2 = travelList; _b < travelList_2.length; _b++) {
    var destination = travelList_2[_b];
    console.log(destination);
}
sortedList = travelList.slice();
sortedList.sort().reverse();
console.log("\nTravel List Sorted Reverse Alphabetically (Copy):");
for (var _c = 0, sortedList_2 = sortedList; _c < sortedList_2.length; _c++) {
    var destination = sortedList_2[_c];
    console.log(destination);
}
console.log("\nOriginal Travel List (Unmodified):");
for (var _d = 0, travelList_3 = travelList; _d < travelList_3.length; _d++) {
    var destination = travelList_3[_d];
    console.log(destination);
}
travelList.reverse();
console.log("\nTravel List Reversed:");
for (var _e = 0, travelList_4 = travelList; _e < travelList_4.length; _e++) {
    var destination = travelList_4[_e];
    console.log(destination);
}
travelList.reverse();
console.log("\nTravel List Back to Original Order:");
for (var _f = 0, travelList_5 = travelList; _f < travelList_5.length; _f++) {
    var destination = travelList_5[_f];
    console.log(destination);
}
travelList.sort();
console.log("\nTravel List Sorted Alphabetically (Original Modified):");
for (var _g = 0, travelList_6 = travelList; _g < travelList_6.length; _g++) {
    var destination = travelList_6[_g];
    console.log(destination);
}
travelList.sort().reverse();
console.log("\nTravel List Sorted Reverse Alphabetically (Original Modified):");
for (var _h = 0, travelList_7 = travelList; _h < travelList_7.length; _h++) {
    var destination = travelList_7[_h];
    console.log(destination);
}
