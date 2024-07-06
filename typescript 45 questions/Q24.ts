let Car = "subaru";
let age = 25;
let isStudent = true;
let colors = ["red", "green", "blue"];


console.log("Is car == 'Subaru'? I predict False.");  
console.log(Car == "Subaru"); 

console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(Car.toLowerCase() == "subaru"); 

console.log("Is 'Hello WORLD'.toLowerCase() == 'hello world'? I predict True.");
console.log("Hello WORLD".toLowerCase() == "hello world"); 

console.log("Is 'Subaru'.toLowerCase() == 'subaru'? I predict True.");
console.log("Subaru".toLowerCase() == "subaru"); 

console.log("Is age > 20? I predict True.");
console.log(age > 20); 

console.log("Is age <= 30? I predict True.");
console.log(age <= 30);

console.log("Is age != 25? I predict False.");
console.log(age != 25); 

console.log("Is age < 18? I predict False.");
console.log(age < 18); 
console.log("Is age > 20 && isStudent? I predict True.");
console.log(age > 20 && isStudent);

console.log("Is age < 18 || isStudent? I predict True.");
console.log(age < 18 || isStudent); 

console.log("Is age > 30 && isStudent === false? I predict False.");
console.log(age > 30 && age < 32); 

console.log("Is age < 18 || isStudent === false? I predict False.");
console.log(age < 18 || age >14);

console.log("Does the colors array include 'green'? I predict True.");
if (colors.indexOf("green") !== -1)
{
    console.log("True! green is present in the array!\n")
}
else {
    console.log("False! green is not present in the array!\n ")
    }

console.log("Does the colors array include 'purple'? I predict False.");
if (colors.indexOf("purple") !== -1)
{
    console.log("True! purple is present in the array!\n")
}
else {
    console.log("False! purple is not present in the array!\n ")
    }

console.log("Does the colors array not include 'purple'? I predict True.");
if (colors.indexOf("purple") == -1)
{
    console.log("True! purple is not present in the array!\n")
}
else {
    console.log("False! purple is present in the array!\n ")
    }

console.log("Does the colors array not include 'green'? I predict False.");
if (colors.indexOf("green") == -1)
{
    console.log("True! green is not present in the array!\n")
}
else {
    console.log("False! green is present in the array!\n ")
    }
