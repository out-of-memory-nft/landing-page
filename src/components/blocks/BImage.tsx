import { Box, Typography } from '@mui/material';

interface BImageProps {
  path: string,
  width: string,
  height: string,
  subtitle?: string,
}

export default function BImage(props: BImageProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src={`${process.env.PUBLIC_URL}/${props.path}`}
        alt={props.path}
        style={{ width: props.width, height: props.height }}
      />
      {renderSubtitle(props.subtitle)}
    </Box>
  )
}

function renderSubtitle(text?: string) {
  if (text) {
    return (
      <Typography 
        typography='subtitle1'
        align='center'
        sx={{ color: 'text.secondary', marginBottom: '30px' }}
      >
        {text}
      </Typography>
    );
  }
}
