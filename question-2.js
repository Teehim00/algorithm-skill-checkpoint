function findProductPrice(products, name) {
  // Your code here
  let left = 0;
  let right = products.length - 1;
  while (left <= right) {
    let title = Math.floor((left + right) / 2);
    if (products[title].name === name) {
      return products[title].price;
    } else if (products[title].name < name) {
      left = title + 1;
    } else {
      right = title - 1;
    }
  }
  return -1;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
