const mysql = require('mysql2/promise');

  const getAllProducts = async () => {
  const query = 'SELECT * FROM products';

  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'dbSmartPricing',
      port: 3308
    });

    const [results] = await connection.query(query);

    if (results.length === 0) {
      console.log('Nenhum produto encontrado na tabela "products".');
      return [];
    }

    console.log('Produtos encontrados:');
    return results;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
}

async function AllProducts() {
 return getAllProducts().then(products => {
    console.log('MEUS PRODUTOS THEN:', products);
    return products;
  });
}

const findProductByCode = async (codigo) => {
  const query = 'SELECT * FROM products WHERE code = ?';

  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'dbSmartPricing',
      port: 3308
    });

    const results = await connection.query(query, [codigo]);

    return results;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
};

module.exports = { AllProducts, findProductByCode };
