# Recriando-a-API-da-Champions-League-com-Node.js-e-Express

# 🏆 Champions League API

Uma API RESTful criada com **Node.js**, **Express** e **TypeScript**, que permite o gerenciamento de **jogadores** e **clubes** da UEFA Champions League.

---

## 🚀 Tecnologias utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **TSX** para execução em desenvolvimento
- Sem banco de dados (dados armazenados em arrays locais)

---

## 📁 Estrutura dos dados

### 🔹 Clube

```ts
{
  id: number,     // gerado de forma sequencial
  name: string
}

{
  id: number,     // gerado de forma sequencial
  name: string
}
```

🔄 Endpoints
📘 GET /clubs
Retorna todos os clubes.

```ts
[
  { "id": 1, "name": "Real Madrid" },
  { "id": 2, "name": "Manchester City" }
]
```

📗 GET /players
Retorna todos os jogadores cadastrados.

📗 GET /players/:id
Retorna um jogador específico pelo id.

🟢 POST /players
Cria um novo jogador.

Exemplo de body:
json

```ts
{
  "name": "Vinicius Jr"
}
```

🟡 PATCH /players/:id
Atualiza o nome de um jogador.

Exemplo de body:
json

```ts
{
  "name": "Cristiano Ronaldo"
}
```

🔴 DELETE /players/:id
Remove um jogador do array.


▶️ Como executar
1. Instale as dependências:

npm install

2. Inicie o servidor:

npm run start:dev



📌 Observações
A API não utiliza banco de dados.

Todos os dados são salvos em arrays em memória, definidos em arquivos na pasta ./src/data/clubs.json.

IDs são gerados com incremento sequencial.

📄 Licença
Este projeto está sob a licença MIT.

Feito com 💻 por Lucas Batista 

https://www.linkedin.com/in/lucas-batista-327704221/

✨ Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

---





