const { findProductByCode } = require('../database/models/productsModel');
function calculateTenPercentAbove(baseValue, percentage) {
  const increaseAmount = (percentage / 100) * baseValue;
  const newValue = parseFloat(baseValue + increaseAmount);
  return newValue.toFixed(2);
}

const applyPriceRules = async (codigo, novoPreco) => {

  const result = await findProductByCode(codigo);
  // console.log('MEU ARRAY:', result);

  const [primeiroElemento, _segundoElemento] = result[0];
  const { cost_price, sales_price } = primeiroElemento;

  const costPrice = cost_price;

  const salesPrice = sales_price;
  const newPrice = novoPreco;

  const calculateTenPercent = calculateTenPercentAbove(salesPrice, 10);
  console.log('MEU CALCULO:', calculateTenPercent);

  if (newPrice < costPrice) {
    return { message: 'O preço de venda não pode ser menor que o preço de custo' };
  }
  if (newPrice > calculateTenPercent || newPrice < calculateTenPercent) {
    return { message: 'O preço de venda não pode ser maior ou menor do que 10% do preço de venda atual' };
  }
  return { message: 'Preço alterado com sucesso' };
};

// const comparingCostPriceAndFinancialPrice = async (req, _res) => {
//   const { codigo, novoPreco } = req.body;
//
// };

module.exports = { applyPriceRules };
