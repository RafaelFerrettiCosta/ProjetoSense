import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  value: number;
  type: string;
  category: string;
  createdAt: string;
}

interface Filters {
  type?: string;
}

type CreateTransactionInput = Omit<Transaction, "id" | "createdAt">;
type EditTransactionInput = Omit<Transaction, "createdAt">;

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createNewTransaction: (transaction: CreateTransactionInput) => Promise<void>;
  editTransaction: (transaction: EditTransactionInput) => Promise<void>;
  listTransactions: (filters: Filters) => Promise<void>;
}
const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    listTransactions();
  }, []);

  async function createNewTransaction(
    transactionInput: CreateTransactionInput
  ) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
    localStorage.setItem("transações", JSON.stringify(transactions));
  }

  async function editTransaction(transactionEdit: EditTransactionInput) {
    const response = await api.put("/transactions", {
      ...transactionEdit,
    });
    const transactions = response.data;
    setTransactions(transactions);
  }

  async function listTransactions(filters?: Filters) {
    let url = "/transactions";

    if (filters) {
      const queryString = new URLSearchParams({ ...filters }).toString();
      if (queryString) url += `?${queryString}`;
    }

    await api.get(url).then((response) => setTransactions(response.data));
    localStorage.setItem("transações", JSON.stringify(transactions));
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createNewTransaction,
        editTransaction,
        listTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
