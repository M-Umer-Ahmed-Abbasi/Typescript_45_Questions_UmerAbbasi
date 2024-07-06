interface Item {
  name: string;
  description?: string; 
  price?: number; 
}

let book: Item = {
  name: "Data Structures",
  description: "A guide on Data Structures",
  price: 12.99,
};

let city: Item = {
  name: "Tokyo",
  description: "The capital of Japan, known for its vibrant culture and modern technology.",
};

let fruit: Item = {
  name: "Mango",
  price: 2.50,
};
console.log(`Book: ${book.name} - ${book.description} (Price: $${book.price})`);
console.log(`City: ${city.name} - ${city.description}`);
console.log(`Fruit: ${fruit.name} (Price: $${fruit.price})`);
