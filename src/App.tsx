import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { CreateTransactionModal } from "./components/CreateTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isCreateTransactionOpen, setIsCreateTransactionOpen] = useState(false);

  function openCreateTransactionModal() {
    setIsCreateTransactionOpen(true);
  }

  function closeCreateTransactionModal() {
    setIsCreateTransactionOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenCreateTransactionModal={openCreateTransactionModal} />
      <Dashboard />
      <CreateTransactionModal
        isOpen={isCreateTransactionOpen}
        onRequestClose={closeCreateTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
