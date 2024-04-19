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

  const findProductByName = async (nomeProduto) => {
    const query = 'SELECT * FROM products WHERE name LIKE ?';

    try {
      const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'dbSmartPricing',
        port: 3308
      });

      console.log('nome do produto CHEGANDO NA FUNC:', nomeProduto)
      const results = await connection.query(query, [`%${nomeProduto}%`]);
      console.log('nome do produto:', results);
      return results;
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      return [];
    }
  };

const getProductByNameAndCode = async (codigo, nomeProduto) => {
  const query = 'SELECT * FROM products WHERE name LIKE ? OR code = ?';
  ;

  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'dbSmartPricing',
      port: 3308
    });

    const results = await connection.query(query, [nomeProduto, codigo]);
    return results;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
};

const changePriceofProdut = async (_codigo, nomeProduto, novoPreco, aditionalPrice) => {
  const query = 'UPDATE products SET sales_price = ? WHERE name = ?';
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'dbSmartPricing',
      port: 3308
    });
  if (!name.includes('UNIDADES')) {
     await connection.query(query, [aditionalPrice, nomeProduto]);

    return 'Preço alterado com sucesso!';
  }
  else {
    await connection.query(query, [novoPreco, nomeProduto]);

    return 'Preço alterado com sucesso!';
  }

  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  };
};

module.exports = {
  AllProducts,
  findProductByCode,
  getProductByNameAndCode,
  findProductByName,
  changePriceofProdut
};
