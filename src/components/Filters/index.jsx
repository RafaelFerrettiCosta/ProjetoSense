import { useState } from "react";
import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export function Filters() {
  const { listTransactions } = useTransactions();
  const { transactions } = useTransactions();
  const aux = [
    ...new Set(transactions.map((transaction) => transaction.category)),
  ];

  const handleFilterInput = (filter, value) => {
    const currentFilter = value ? { [filter]: value } : {};
    listTransactions(currentFilter);
  };

  return (
    <Container>
      <select
        name="Tipo de transação"
        id="type"
        onChange={(el) => handleFilterInput(el.target.id, el.target.value)}
      >
        <option value="">Todos</option>
        <option value="entrada">Entradas</option>
        <option value="saida">Saídas</option>
      </select>
      <select
        name="Categorias"
        id="type"
        onChange={(el) => handleFilterInput(el.target.id, el.target.value)}
      >
        ><option value="">Categorias</option>
        {aux.map((transaction) => (
          <option value={transaction}>{transaction}</option>
        ))}
      </select>
    </Container>
  );
}
