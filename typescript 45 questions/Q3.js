var personName = "Muhammad Umer Ahmed Abbasi";
//Lower Case
console.log("To LowerCase: " + personName.toLowerCase());
//Upper Case
console.log("\nTo UpperCase: " + personName.toUpperCase());
//Title Case
var words = personName.split(" ");
var titleCaseName = "";
for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
    var word = words_1[_i];
    titleCaseName += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
}
titleCaseName = titleCaseName.trim(); // Remove trailing space
console.log("\nTitle Case:", titleCaseName);
