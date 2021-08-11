var  products = [
    {
      productName: "Laptop",
      productId: 01,
      stock: 100,
    },
    {
      productName: "Microphone",
      productId: 02,
      stock: 10,
    },
    {
      productName: "Monitor",
      productId: 03,
      stock: 20,
    },
  ]

  function product(productName) {
    const selectedProduct = []
    for(let i = 0; i < products.length; i++){
        const element = products[i];
        for(let property in element){
            if(property == "productName" && element[property] == productName){
                selectedProduct.push(element);
            }
        }

    }
    return selectedProduct;
}
console.log(product("Laptop"));