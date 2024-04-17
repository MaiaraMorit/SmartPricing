const { AllProducts } = require("../database/models/productsModel");

const productList = async () => {
  const products = await AllProducts();
  console.log('MEUS PRODUTOS NO SERVICE:', products);

  return products;
};
module.exports = { productList };