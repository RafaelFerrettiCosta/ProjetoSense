import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Mercado do mês",
          category: "Compras",
          type: "saida",
          value: 558.3,
          createdAt: new Date("2022-03-26 13:44:00"),
        },
        {
          id: 2,
          title: "Peças novas para o computador",
          category: "Compras",
          type: "saida",
          value: 3297.87,
          createdAt: new Date("2022-03-26 13:46:00"),
        },
        {
          id: 3,
          title: "Salário Janeiro",
          category: "Salário",
          type: "entrada",
          value: 6070.34,
          createdAt: new Date("2022-01-05 09:30:00"),
        },
        {
          id: 4,
          title: "Salário fevereiro",
          category: "Salário",
          type: "entrada",
          value: 6070.34,
          createdAt: new Date("2022-02-05 09:30:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", (schema, request) => {
      return schema.db.transactions.where({ ...request.queryParams });
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });

    this.put("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      // const transaction = schema.db.transactions.find(data.id)
      // transaction.update({value: data.value});
      return schema.db.transactions;
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
