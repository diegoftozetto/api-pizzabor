# API PizzaBor

API REST para gerenciamento de clientes e produtos da pizzaria fictícia [PizzaBor](https://diegoftozetto.github.io/web-pizzabor/), desenvolvida com Node.js, Express e MongoDB.

## Tecnologias

- **Node.js** com **Express**
- **MongoDB** via **Mongoose**
- **Joi** / **Celebrate** para validação de dados
- **Axios** para integração com a API ViaCEP
- **Jest** + **Supertest** para testes
- **Nodemon** para desenvolvimento

## Pré-requisitos

- Node.js
- MongoDB

## Instalação

```bash
npm install
```

Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto:

```env
MONGO_URI=mongodb://localhost:27017/pizzabor
PORT=3000
```

## Executando

**Desenvolvimento:**
```bash
npm run dev
```

**Produção:**
```bash
npm start
```

**Testes:**
```bash
npm test
```

## Endpoints

Base URL: `/api`

### Clientes — `/api/clients`

| Método | Rota               | Descrição                   |
|--------|--------------------|-----------------------------|
| GET    | `/api/clients`     | Lista todos os clientes     |
| POST   | `/api/clients`     | Cadastra um novo cliente    |
| DELETE | `/api/clients/:id` | Remove um cliente pelo ID   |

**Body — POST `/api/clients`:**
```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "phone": "11999999999",
  "cep": "01310100"
}
```

> O endereço (logradouro, bairro, localidade, UF) é preenchido automaticamente via [ViaCEP](https://viacep.com.br) a partir do CEP informado.

### Produtos — `/api/products`

| Método | Rota                | Descrição                   |
|--------|---------------------|-----------------------------|
| GET    | `/api/products`     | Lista todos os produtos     |
| POST   | `/api/products`     | Cadastra um novo produto    |
| DELETE | `/api/products/:id` | Remove um produto pelo ID   |

**Body — POST `/api/products`:**
```json
{
  "name": "Pizza Margherita",
  "categorie": "Pizza",
  "price": "45.90",
  "description": "Molho de tomate, mussarela e manjericão",
  "url": "https://exemplo.com/imagem.jpg"
}
```

## Estrutura do Projeto

```
src/
├── app.js                  # Configuração do Express
├── config/db/              # Configuração do banco de dados
├── controllers/            # Controladores das rotas
├── dtos/                   # Data Transfer Objects
├── models/                 # Schemas do Mongoose
├── routes/                 # Definição das rotas
├── schemas/                # Schemas de validação Joi
└── service/                # Regras de negócio
```
