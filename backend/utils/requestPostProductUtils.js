const { findProductByCode, getProductByNameAndCode, findProductByName,
  changePriceofProdut
} = require('../database/models/productsModel');
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
  // console.log('MEU CALCULO:', calculateTenPercent);

  if (newPrice < costPrice) {
    return { message: 'O preço de venda não pode ser menor que o preço de custo' };
  }
  if (newPrice > calculateTenPercent || newPrice < calculateTenPercent) {
    return { message: 'O preço de venda não pode ser maior ou menor do que 10% do preço de venda atual' };
  }
  return { message: 'Preço alterado com sucesso' };
};

const applyPriceRulesPacks = async (codigo, nomeProduto, novoPreco) => {
  const result = await getProductByNameAndCode(codigo, nomeProduto);
  // console.log('MEU ARRAY:', result[0]);

  result[0].map(async (e) => {
    const {name} = e;
    if (name.includes('UNIDADES')) {
      const match = name.match(/(\d+)\s*unidades/i);
      const unitsOfProduct = match[1];

      const pricePerUnit = Math.round(novoPreco / unitsOfProduct * 100) / 100;
      // console.log('MEU PREÇO POR UNIDADE:', pricePerUnit);
      return pricePerUnit
    }
    if (name.includes('KIT')) {
      const parts = name.split('+');
      console.log('Partes:', parts);

      for (const productName of parts) {
        const trimmedProductName = productName.trim();
        const productData = await findProductByName(trimmedProductName);

        // Verificar se o nome do produto não contém 'KIT'
        if (!trimmedProductName.includes('KIT')) {
          console.log('Meu Produto:', productData);

          // Verificar se há dados do produto e se há um objeto válido na primeira posição do array
          if (productData && productData[0]) {
            const produto = productData[0]; // Acessando o primeiro elemento do array
            const salesPrice = parseFloat(produto.sales_price); // Converter sales_price para um número de ponto flutuante

            // Calcular o novo preço por unidade
            const newPricePerUnit = Math.round((salesPrice - novoPreco) / parts.length * 100) / 100;

            // Calcular o novo preço total
            const result = newPricePerUnit + salesPrice;

            const finalResult = changePriceofProdut(produto.code, produto.name, result)

            console.log('Meu Novo Preço por Unidade:', newPricePerUnit);
            console.log('Meu Resultado:', finalResult);

            return finalResult;
          }
        }
      }
    }
  })


  return result;
};

module.exports = { applyPriceRules, applyPriceRulesPacks };
