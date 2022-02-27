
interface BTextProps {
  text: string,
}

const BText = (props: BTextProps): JSX.Element => {
  return <div>{props.text}</div>
}

export default BText;