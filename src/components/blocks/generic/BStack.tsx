import { Stack } from '@mui/material';

interface BStackProps {
  children: JSX.Element[],
  direction: 'row' | 'column',
  spacing: number,
  margin?: string,
}

const BStack = (props: BStackProps): JSX.Element => {
  return (
    <Stack 
      direction={props.direction}
      spacing={props.spacing}
      sx={{ margin: props.margin }}
    >
      {props.children}
    </Stack>
  )
}

export default BStack;