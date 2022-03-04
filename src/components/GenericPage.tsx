import { Container } from '@mui/material';

import { Block } from "./blocks";
import { EditProvider } from '../contexts/EditContext';

interface GenericPageProps {
  id: string,
}

export default function GenericPage(props: GenericPageProps) {
  const isDevelopment = process.env.NODE_ENV && process.env.NODE_ENV === 'development';

  return (
    <EditProvider value={isDevelopment}>
      <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Block id={props.id} />
      </Container>
    </EditProvider>
  );
}