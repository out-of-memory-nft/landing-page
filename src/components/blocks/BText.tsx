import { Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

interface BTextProps {
  text: string,
  margin?: string,
}

const BText = (props: BTextProps): JSX.Element => {
  return <Typography component={ReactMarkdown} sx={{ margin: props.margin }}>{props.text}</Typography>
}

export default BText;