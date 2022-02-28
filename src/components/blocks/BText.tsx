import { Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

interface BTextProps {
  text: string,
}

const BText = (props: BTextProps): JSX.Element => {
  return <Typography component={ReactMarkdown}>{props.text}</Typography>
}

export default BText;