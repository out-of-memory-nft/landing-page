import { Container } from '@mui/material';

interface BPageProps {
  children: JSX.Element[],
}

export default function BPage(props: BPageProps) {
  return (
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {props.children}
    </Container>
  );
}
