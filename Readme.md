# Desafio Fullstack: Desenvolva um Sistema de para validação de preços!


## Objetivo:
Construa um sistema completo para validar e atualizar preços de produtos a partir de arquivos carregados pelo usuário. O sistema contará com um back-end em Node.js para processamento e validação dos dados, e um front-end em React.js para interação com o usuário.

## Tecnologias:
- Backend: Node.js, MySQL (versão 5 ou 8)
- Frontend: React.js
- Banco de Dados: MySQL (versão 5 ou 8)
- Ferramentas: Docker (opcional)

## Funcionalidades:

1. Carregar arquivo de precificação.

2. Botão "VALIDAR" para verificar:
Presença de todos os campos obrigatórios.

3. Existência dos códigos de produtos informados.

4. Preços preenchidos e válidos (valores numéricos).

5. Conformidade com as regras do CENÁRIO.

6. Exibir informações dos produtos:
Código, Nome, Preço Atual, Novo Preço.

7. Indicar violações de regras para cada produto.

8. Botão "ATUALIZAR" habilitado apenas se todos os produtos estiverem validados.

9. Ao clicar em "ATUALIZAR":
Salvar novos preços no banco de dados.

10. Atualizar preços de custo dos pacotes.

11. Preparar tela para novo arquivo.



## Etapas:

### Inicializando o Projeto:

#### Backend (Node.js):

- Clone este repositório.
- Acesse a pasta do backend.
- Execute o comando npm i para instalar as dependências do projeto.
- Execute o comando npm run init para inicializar o script de desenvolvimento.
- Execute o comando docker-compose up para criar e popular o banco de dados no Docker.

#### Frontend (React.js):

- Acesse a pasta do frontend.
Execute o comando npm i para instalar as dependências do projeto.
- Execute o comando npm start para iniciar o servidor de desenvolvimento.

## Desenvolvimento:
#### Implemente as funcionalidades do backend:
- Crie as rotas da API para:
- Carregar arquivo de precificação.
- Validar dados do arquivo.
- Atualizar preços no banco de dados.
- Desenvolva a lógica de validação de acordo com os requisitos.
- Conecte-se ao banco de dados MySQL.
- Implemente as funcionalidades do frontend:
- Crie a interface para carregar o arquivo de precificação.
- Exiba os resultados da validação com as informações dos produtos.
- Implemente os botões "VALIDAR" e "ATUALIZAR" com suas respectivas funcionalidades.
- Comunique-se com a API do backend para realizar as operações.

## Testes:

1. Realize testes manuais para garantir o funcionamento correto do sistema:
2. Valide diferentes cenários de arquivos de precificação.
3. Verifique a exibição das informações e mensagens de erro.
Teste o botão "ATUALIZAR" e a atualização dos preços no banco de dados.