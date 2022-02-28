import { Paper } from '@mui/material';

interface BPageProps {
  children: JSX.Element[],
  elevation: number,
  width: string,
  padding: string,
  backgroundColor: string,
}

export default function BPage(props: BPageProps) {
  return (
    <Paper elevation={props.elevation} sx={{ padding: props.padding, width: props.width, backgroundColor: props.backgroundColor }}>
      {props.children}
    </Paper>
  );
}
