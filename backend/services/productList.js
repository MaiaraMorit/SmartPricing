const getProducts = require('../database/models/productsModel');
const productList = async () => {
  // const products = await Products.findAll();
  // return products;
  // return 'LISTA DE PRODUTOS';

  const products = await getProducts.AllProducts();
  console.log('MEUS PRODUTOS NO SERVICE:', products);

  return products;
};
module.exports = { productList };