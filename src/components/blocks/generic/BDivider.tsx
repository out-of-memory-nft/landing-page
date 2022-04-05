import { Divider } from '@mui/material';

interface BDividerProps {
  text?: string,
  margin?: string,
}

export default function BDivider(props: BDividerProps) {
  return (
    <Divider sx={{ margin: props.margin }}>
      {props.text}
    </Divider>
  )
}
