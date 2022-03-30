import { Container } from '@mui/material';

interface BContainerProps {
  children: JSX.Element[],
  maxWidth: any, // TODO maxWidth typing does not accept string as docs implies
  margin?: string,
}

const BContainer = (props: BContainerProps): JSX.Element => {
  return (
    <Container maxWidth={props.maxWidth} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: props.margin }}>
      {props.children}
    </Container>
  )
}

export default BContainer;