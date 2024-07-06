var favoriteTransports = ["Honda-125 Motorbike", "Toyota Prius", "Buggati"];
var statements = [];
for (var _i = 0, favoriteTransports_1 = favoriteTransports; _i < favoriteTransports_1.length; _i++) {
    var transport = favoriteTransports_1[_i];
    statements.push([
        "I would like to own a ".concat(transport, "."),
        "I would like to modify my ".concat(transport, "."),
        "I would like to ride my ".concat(transport, " at night."),
    ]);
}
for (var i = 0; i < favoriteTransports.length; i++) {
    console.log("\nStatements about ".concat(favoriteTransports[i], ":"));
    for (var _a = 0, _b = statements[i]; _a < _b.length; _a++) {
        var statement = _b[_a];
        console.log(statement);
    }
}
