const express = require('express');
const { productList } = require("../services/productList");
const validatePriceAdjustment = require(
    "../middlewares/validatePriceAdjustment");
const router = express.Router();
router.use(express.json());

router.get('/', async function (req, res, _next) {
  try {
    const productsHere = await productList();
    console.log('MEUS PRODUTOS AQUI:', productsHere);

    return res.json(productsHere);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).send('Erro ao buscar produtos');
  }
});
router.post('/', validatePriceAdjustment, async function (req, res, _next) {
  try {
    const ProductPriceAdjustment = req.body;

    console.log('PRODUTO A SER AJUSTADO:', ProductPriceAdjustment);

    return res.status(200).send('Preço ajustado com sucesso');
  } catch (error) {
    console.error('Erro ao ajustar preço:', error);
    res.status(500).send('Erro ao ajustar preço');
  }
});


module.exports = router;