// const  = require('../../routes/products');

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('Requisições da rota product', () => {
  // test('GET /products', async () => {
  //   const res = mockResponse();
  //   const req = {};
  //   const next = jest.fn();
  //
  //
  //   await route()
  //   expect(res.json).toHaveBeenCalled();
  // });

});