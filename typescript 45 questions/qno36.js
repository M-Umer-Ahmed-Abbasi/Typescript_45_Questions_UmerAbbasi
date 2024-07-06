function make_shirt(size, Message) {
    return;
    console.log("Size Of Shirt:", size);
    if (size !== "Large") {
        console.log("Message Print on Shirt:", Message);
    }
    else {
        console.log("I love Typescript!");
    }
}
var Size = "Medium";
var Message = "Slow Progress is Better than No Progress";
make_shirt(Size, Message);
