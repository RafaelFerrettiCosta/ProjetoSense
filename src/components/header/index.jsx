import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenCreateTransactionModal: () => void;
}

export function Header({ onOpenCreateTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="sense saldo"></img>
        <button type="button" onClick={onOpenCreateTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
