import { Block } from "../components/blocks";
import { Container } from '@mui/material';

interface GenericPageProps {
  id: string,
}

export default function GenericPage(props: GenericPageProps) {


  return (
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Block id={props.id} />
    </Container>
  );
}