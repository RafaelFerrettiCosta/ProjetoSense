import { useState } from "react";
import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export function Filters() {
  const { listTransactions } = useTransactions();

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
    </Container>
  );
}
