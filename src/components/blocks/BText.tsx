import { Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

interface BTextProps {
  text: string,
  margin?: string,
  align?: 'right' | 'left' | 'inherit' | 'center' | 'justify',
}

const BText = (props: BTextProps): JSX.Element => {
  return <Typography component={ReactMarkdown} align={props.align} sx={{ margin: props.margin }}>{props.text}</Typography>
}

export default BText;