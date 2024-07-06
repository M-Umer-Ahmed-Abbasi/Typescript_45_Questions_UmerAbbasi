function make_greate(Names:string[]):string[]
{
    Names=Names.map((element)=>{return "Greate " + element});
   return Names;
}
function show_Magician_name(element: string[]) {
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
Magician_Name_list=make_greate(Magician_Name_list);
show_Magician_name(Magician_Name_list);