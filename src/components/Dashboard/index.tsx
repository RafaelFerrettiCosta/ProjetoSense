import { useState } from "react";
import { EditTransactionModal } from "../EditTransactionModal";
import { Filters } from "../Filters";
import { Summary } from "../Summary";
import { Transactions } from "../Transactions";
import { Container } from "./styles";

export function Dashboard() {
  const [isEditTransactionOpen, setIsEditTransactionOpen] = useState(false);
  const [idTransaction, setIdTransaction] = useState(0);

  function openEditTransactionModal(id: number) {
    setIdTransaction(id)
    setIsEditTransactionOpen(true);
  }

  function closeEditTransactionModal() {
    setIsEditTransactionOpen(false);
  }

  return (
    <Container>
      <Summary />
      <Filters />
      <Transactions onOpenEditTransactionModal={openEditTransactionModal} />
      <EditTransactionModal
        isOpen={isEditTransactionOpen}
        onRequestClose={closeEditTransactionModal}
        id={idTransaction}
      />
    </Container>
  );
}
