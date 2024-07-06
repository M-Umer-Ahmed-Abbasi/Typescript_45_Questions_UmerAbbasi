var Array_user = [];
if (Array_user.length == 0) {
    console.log("Array is Empty. We need to find some user");
}
Array_user = ["John", "Michael", "David", "Thomas", "Franklin"];
console.log("Array_user: ", Array_user);
while (Array_user.length > 0) {
    console.log(Array_user.pop() + " is Removed from Array:");
}
console.log("All user removed from array We need to find some user");
