function make_greate(Names:string[]):string[]
{
    Names=Names.map((element)=>{return "Greate " + element});
   return Names;
}
function show_Magician_name(element: string[],Str:string) {
    console.log(Str," Array Of Magician Names","\n");
    for(let i in element)
        {
            console.log(Number(i)+1,"  ",element[i]);
        }
}

let Magician_Name_list = [
  "David Copperfield",
  "David Blaine",
  "Derren Brown",
  "Penn and Teller",
  "Lance Burton",
  "Dynamo",
  "Siegfried and Roy",
  "Criss Angel",
  "Harry Houdini",
];
let New_list=make_greate(Magician_Name_list);
show_Magician_name(Magician_Name_list,"Original");
console.log();
show_Magician_name(New_list,"Modified(By Greate) New"); 