const products = [
  {
    title: "Laptop",
    price: 50000,
    stock: 10
  },
  {
    title: "Phone",
    price: 20000,
    stock: 5
  }
];
/*Do these:
Print Phone
Print Laptop price
Change Phone stock to 20
Add:
brand: "Apple" to Phone
Print full array*/

console.log(products[1].title);
console.log(products[0].price);
products[1].stock = 20;
products[1].brand = "Apple";
console.log(products);
