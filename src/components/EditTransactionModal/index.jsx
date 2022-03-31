import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import close from "../../assets/close.svg";
import entrada from "../../assets/entradas.svg";
import saida from "../../assets/saidas.svg";
import { useState, FormEvent, useEffect } from "react";
import { useTransactions } from "../../hooks/useTransactions";

interface EditTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id: number;
}

export function EditTransactionModal({
  isOpen,
  onRequestClose,
  id,
}: EditTransactionModalProps) {
  const { editTransaction, transactions } = useTransactions();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("entrada");

  async function handleEditTransaction(event: FormEvent) {
    event.preventDefault();

    await editTransaction({
      id,
      title,
      value,
      category,
      type,
    });

    setTitle("");
    setValue(0);
    setCategory("");
    setType("entrada");
    onRequestClose();
  }

  useEffect(() => {
    if (id) {
      const transaction = transactions.find((t) => t.id == id);
      setTitle(transaction.title);
      setValue(transaction.value);
      setCategory(transaction.category);
      setType(transaction.type);
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="modal-close">
        <img src={close} alt="Fechar" />
      </button>
      <Container onSubmit={handleEditTransaction}>
        <h2>Editar Transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("entrada");
            }}
            isActive={type === "entrada"}
            activeColor="green"
          >
            <img src={entrada} alt="Entrada" />
            <span>entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("saida");
            }}
            isActive={type === "saida"}
            activeColor="red"
          >
            <img src={saida} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="number"
          placeholder="valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
        <button className="excluir">Excluir</button>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
