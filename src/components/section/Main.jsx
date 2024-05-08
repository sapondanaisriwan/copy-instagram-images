import SwitchControl from "../ui/SwitchControl";
import Container from "../ui/Container";
import { KeyEnableCopy } from "../../data/storage-key";

function Main() {
  return (
    <Container>
      <SwitchControl storageKey={KeyEnableCopy} label="Enable Copy" borderBottom={false} />
    </Container>
  );
}

export default Main;
