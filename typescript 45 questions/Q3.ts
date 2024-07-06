let personName: string = "Muhammad Umer Ahmed Abbasi"
//Lower Case
console.log("To LowerCase: " + personName.toLowerCase())
//Upper Case
console.log("\nTo UpperCase: " + personName.toUpperCase())
//Title Case
let words: string[] = personName.split(" ");
let titleCaseName: string = "";
for (let word of words) {
  titleCaseName += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
}
titleCaseName = titleCaseName.trim(); // Remove trailing space
console.log("\nTitle Case:", titleCaseName);