function city_country(city_name: string, country: string): string {
  return '"' + city_name + ", " + country + '\"';
}

console.log(city_country("New York", "USA"));
console.log(city_country("Peshawar", "Pakistan"));
console.log(city_country("Bejing", "China"));
