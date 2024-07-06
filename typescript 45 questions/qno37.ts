function make_shirt(size:string,Message:string)
{
    
   console.log("Size Of Shirt:",size);
   if(size!=="Large")
    {
   console.log("Message Print on Shirt:",Message);
} else {
    console.log("I love Typescript!");
}

}
let Size:string="Large";
let Message:string="Slow Progress is Better than No Progress";

make_shirt(Size,Message);