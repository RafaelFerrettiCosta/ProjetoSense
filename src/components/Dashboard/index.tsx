import { Filters } from "../Filters";
import { Summary } from "../Summary";
import { Transactions } from "../Transactions";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <Filters />
      <Transactions />
    </Container>
  );
}
