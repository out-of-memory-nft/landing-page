
interface BImageProps {
  path: string,
  width: string,
  height: string
}

export default function BImage(props: BImageProps) {
  return (
    <img src={`${process.env.PUBLIC_URL}/${props.path}`} alt={props.path} style={{ width: props.width, height: props.height }}/>
  )
}