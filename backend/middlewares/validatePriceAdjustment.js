const validatePriceAdjustment = async (req, res, next) => {
  const { codigo, nomeProduto, novoPreco } = req.body;

  if (typeof novoPreco !== 'number') {
    return res.status(400).json({ error: 'Novo preço inválido' });
  }

  const numeroConvertido = parseFloat(novoPreco);

  if (isNaN(numeroConvertido) || !isFinite(numeroConvertido)) {
    return res.status(400).json({ error: 'Novo preço inválido' });
  }

  if (!codigo || !nomeProduto || !novoPreco) {
    return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
  }
  return next();
};

module.exports = validatePriceAdjustment;