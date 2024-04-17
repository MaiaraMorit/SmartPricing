const mysql = require('mysql2/promise');

async function getAllProducts() {
  const query = 'SELECT * FROM packs';

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

// Exemplo de uso
async function AllPacks() {
  return getAllProducts().then(packs => {
    console.log('MEUS PACKS DE PRODUTOS THEN:', packs);
    return packs;
  });
}


module.exports = { AllPacks };