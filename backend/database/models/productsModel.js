const mysql = require('mysql2/promise');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '123456',
//   database: 'dbSmartPricing',
//   port: 3308
// });

async function getAllProducts() {
  const query = 'SELECT * FROM products';

  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'dbSmartPricing',
      port: 3308
    });
    // await connection.connect();
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

// Exemplo de uso
async function AllProducts() {
 return getAllProducts().then(products => {
    console.log('MEUS PRODUTOS THEN:', products);
    return products;
  });
}


module.exports = { AllProducts };