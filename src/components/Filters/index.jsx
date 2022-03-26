import { useState } from "react";
import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export function Filters() {
  return (
    <Container>
      <select name="Tipo de transação" id="Tipo">
        <option value="Todos">Todos</option>
        <option value="Entradas">Entradas</option>
        <option value="Saidas">Saídas</option>
      </select>
    </Container>
  );
}
