function createCar(manufacturer, model) {
    var MoreAttributes = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        MoreAttributes[_i - 2] = arguments[_i];
    }
    var car = {};
    car.manufacturer = manufacturer;
    car.model = model;
    for (var _a = 0, MoreAttributes_1 = MoreAttributes; _a < MoreAttributes_1.length; _a++) {
        var _b = MoreAttributes_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var myCar = createCar("Toyota", "Camry", ["color", "blue"], ["sunroof", true]);
console.log(myCar);
