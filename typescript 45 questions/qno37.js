function make_shirt(size, Message) {
    console.log("Size Of Shirt:", size);
    if (size !== "Large") {
        console.log("Message Print on Shirt:", Message);
    }
    else {
        console.log("I love Typescript!");
    }
}
var Size = "Large";
var Message = "Slow Progress is Better than No Progress";
make_shirt(Size, Message);
