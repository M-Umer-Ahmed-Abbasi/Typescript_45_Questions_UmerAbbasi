function createCar(manufacturer: string, model: string, ...MoreAttributes: [string, any][]) {
  const car: { [key: string]: any } = {};
  car.manufacturer = manufacturer;
  car.model = model;

  for (const [key, value] of MoreAttributes) {
    car[key] = value;
  }

  return car;
}

const myCar = createCar("Toyota", "Camry", ["color", "blue"], ["sunroof", true]);
console.log(myCar);