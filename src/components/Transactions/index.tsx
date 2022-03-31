import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

interface TransactionProps {
  onOpenEditTransactionModal: (id: number) => void;
}

export function Transactions({ onOpenEditTransactionModal }: TransactionProps) {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td>{transaction.category}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.value)}
              </td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt),
                )}
              </td>
              <td>
                <button type="button" onClick={() => onOpenEditTransactionModal(transaction.id)}>
                  <p>...</p>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
