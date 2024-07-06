function make_greate(Names) {
    Names = Names.map(function (element) { return "Greate " + element; });
    return Names;
}
function show_Magician_name(element) {
    for (var i in element) {
        console.log(Number(i) + 1, "  ", element[i]);
    }
}
var Magician_Name_list = [
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
Magician_Name_list = make_greate(Magician_Name_list);
show_Magician_name(Magician_Name_list);
