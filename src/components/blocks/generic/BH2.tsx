import { Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

interface BH2Props {
  text: string,
  margin?: string,
}

const BH2 = (props: BH2Props): JSX.Element => {
  return <Typography variant='h2' sx={{ fontWeight: 'bold', margin: props.margin }} component={ReactMarkdown}>{props.text}</Typography>
}

export default BH2;