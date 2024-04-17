const express = require('express');
const { productList } = require("../services/productList");
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

module.exports = router;