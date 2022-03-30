import { useState } from "react";
import { EditTransactionModal } from "../EditTransactionModal";
import { Filters } from "../Filters";
import { Summary } from "../Summary";
import { Transactions } from "../Transactions";
import { Container } from "./styles";

export function Dashboard() {
  const [isEditTransactionOpen, setIsEditTransactionOpen] = useState(false);

  function openEditTransactionModal() {
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
      />
    </Container>
  );
}
