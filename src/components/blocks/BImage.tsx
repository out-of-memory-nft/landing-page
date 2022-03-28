import { Box } from '@mui/material';

interface BImageProps {
  path: string,
  width: string,
  height: string,
}

export default function BImage(props: BImageProps) {
  return (
    <Box 
      component={'img'}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      src={`${process.env.PUBLIC_URL}/${props.path}`}
      alt={props.path}
      style={{ width: props.width, height: props.height }}
    />
  )
}
