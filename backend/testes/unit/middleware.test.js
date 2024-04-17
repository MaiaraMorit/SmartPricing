const validarCamposProduto = require('../../middlewares/validatePriceAdjustment');
// Mock para o objeto de resposta
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('Middleware de validação de campos do produto', () => {
  test('Deve retornar erro se algum campo obrigatório estiver ausente', async () => {
    const req = { body: { nomeProduto: 'Produto', novoPreco: 10 } };
    const res = mockResponse();

    await validarCamposProduto(req, res, jest.fn());

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Campos obrigatórios ausentes' });
  });

  test('Deve retornar erro se o novo preço não for um número válido', async () => {
    const req = { body: { codigo: '123', nomeProduto: 'Produto', novoPreco: 'invalido' } };
    const res = mockResponse();

    await validarCamposProduto(req, res, jest.fn());

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Novo preço inválido' });
  });

  test('Deve passar para o próximo middleware se todos os campos estiverem válidos', async () => {
    const req = { body: { codigo: '123', nomeProduto: 'Produto', novoPreco: 10 } };
    const res = mockResponse();
    const next = jest.fn();

    await validarCamposProduto(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});