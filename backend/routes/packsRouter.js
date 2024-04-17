const express = require('express');
const { packList } = require("../services/packList");
const router = express.Router();
router.use(express.json());
router.get('/', async function (req, res, _next) {
  try {
    const allPacks = await packList();
    // console.log('PACKS AQUI:', allPacks);

    return res.json(allPacks);
  } catch (error) {
    console.error('Erro ao buscar packs:', error);
    res.status(500).send('Erro ao buscar packs');
  }
});


module.exports = router;