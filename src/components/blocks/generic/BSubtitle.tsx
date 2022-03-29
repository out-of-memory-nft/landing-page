import { Typography } from '@mui/material';

interface BSubtitleProps {
  text: string,
  margin?: string,
}

const BSubtitle = (props: BSubtitleProps): JSX.Element => {
  return (
    <Typography 
      typography='subtitle1'
      align='center'
      sx={{ color: 'text.secondary', margin: props.margin }}
    >
      {props.text}
    </Typography>
  )
}

export default BSubtitle;