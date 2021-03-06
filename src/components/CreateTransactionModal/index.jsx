import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import close from "../../assets/close.svg";
import entrada from "../../assets/entradas.svg";
import saida from "../../assets/saidas.svg";
import { useState, FormEvent, useContext } from "react";
import { api } from "../../services/api";
import { useTransactions } from "../../hooks/useTransactions";

interface CreateTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function CreateTransactionModal({
  isOpen,
  onRequestClose,
}: CreateTransactionModalProps) {
  const { createNewTransaction } = useTransactions();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("entrada");

  async function handleCreateTransaction(event: FormEvent) {
    event.preventDefault();

    await createNewTransaction({
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
      <Container onSubmit={handleCreateTransaction}>
        <h2>Cadastrar Transação</h2>

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
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
