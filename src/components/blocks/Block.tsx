import { getBlock } from './registry';

export interface BlockProps {
  id: string,
  type: string,
  properties: Record<string, any>,
  // content: string[],
}

export default function Block(props: BlockProps) {
  const Component = getBlock(props.type);

  return <Component {...props.properties} />
}