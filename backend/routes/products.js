const express = require('express');
const router = express.Router();
const products = require('../services/productList');
router.use(express.json());

router.get('/', async function (req, res, _next) {
  try {
    const productsHere = await products.productList();
    console.log('MEUS PRODUTOS AQUI:', productsHere);

    // return res.status(200).json(productsHere);
    return res.json(productsHere);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).send('Erro ao buscar produtos');
  }
});

module.exports = router;