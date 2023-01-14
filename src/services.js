function getProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    resolve(data.products);
  });
}
export default getProducts;
