import { Container } from "./styles";
import entradas from "../../assets/entradas.svg";
import saidas from "../../assets/saidas.svg";
import total from "../../assets/total.svg";
import React, { useContext } from "react";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "entrada") {
        acc.entradas += transaction.value;
      } else {
        acc.saidas += transaction.value;
      }
      acc.total = acc.entradas - acc.saidas;
      return acc;
    },
    {
      entradas: 0,
      saidas: 0,
      total: 0,
    },
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradas} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.entradas)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={saidas} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.saidas)}
        </strong>
      </div>

      <div className="result">
        <header>
          <p>Total</p>
          <img src={total} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
