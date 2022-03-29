import { Box } from '@mui/material';
import { omitBy, isUndefined } from 'lodash';

interface BBoxProps {
  children: JSX.Element[],
  width?: string,
  height?: string,
  margin?: string,
  flex?: {
    direction?: string,
    alignSelf?: string,
    alignItems?: string,
  }
}

const BBox = (props: BBoxProps): JSX.Element => {
  const sx = omitBy({ 
    display: 'flex',
    width: props.width,
    height: props.height,
    margin: props.margin,
    flexDirection: props.flex?.direction,
    alignSelf: props.flex?.alignSelf,
    alignItems: props.flex?.alignItems,
  }, isUndefined);

  return (
    <Box sx={sx}>
      {props.children}
    </Box>
  )
}

export default BBox;