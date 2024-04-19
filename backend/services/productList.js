const { AllProducts } = require("../database/models/productsModel");
const { applyPriceRules, applyPriceRulesPacks} = require('../utils/requestPostProductUtils');

const productList = async () => {
  const products = await AllProducts();
  console.log('MEUS PRODUTOS NO SERVICE:', products);

  return products;
};

const ProductPriceAdjustment = async (codigo, nomeProduto, novoPreco) => {

  // console.log('MEU PRODUTO NO SERVICE:', getproducts);

  return applyPriceRulesPacks(codigo, nomeProduto, novoPreco);

  // se o produto não retornar Preço alterado com sucesso ou a proxima deu certo.
  // aletar o valor no banco de dados após passar nas regras de negocio.
};


module.exports = { productList, ProductPriceAdjustment };