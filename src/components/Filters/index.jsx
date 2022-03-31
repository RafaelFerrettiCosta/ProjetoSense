import { useState } from "react";
import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export function Filters() {
  const { listTransactions } = useTransactions();
  const { transactions } = useTransactions();
  const [currentFilter, setCurrentFilter] = useState({});
  const aux = [
    ...new Set(transactions.map((transaction) => transaction.category)),
  ];

  const handleFilterInput = (el) => {
    const filter = el.target.id;
    const value = el.target.value;
    let curr = currentFilter || {};

    if (filter == "type" && value) curr = { type: value };
    else if (filter == "type") curr = {};
    else if (value) curr = { ...curr, [filter]: value };
    else delete curr[filter];

    setCurrentFilter(curr);
    listTransactions(curr);
  };

  return (
    <Container>
      <select name="Tipo de transação" id="type" onChange={handleFilterInput}>
        <option value="">Todos</option>
        <option value="entrada">Entradas</option>
        <option value="saida">Saídas</option>
      </select>
      <select
        name="Categorias"
        id="category"
        value={currentFilter.category || ""}
        onChange={handleFilterInput}
      >
        <option value="">Categorias</option>
        {aux.map((transaction) => (
          <option value={transaction}>{transaction}</option>
        ))}
      </select>
    </Container>
  );
}
