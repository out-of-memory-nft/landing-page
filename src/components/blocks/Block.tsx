import { useState, useEffect } from 'react';

import { getBlock } from './registry';
import * as blockService from '../../services/block-service';

export interface BlockModel {
  id: string,
  type: string,
  properties: Record<string, any>,
  content: string[],
}

interface BlockProps {
  id: string,
}

export default function Block(props: BlockProps) {
  const [block, setBlock] = useState<BlockModel | null>(null);

  useEffect(() => {
    blockService.getBlock(props.id).then(blockData => setBlock(blockData));
  }, [props.id, setBlock]);

  if (!block) {
    return <div>Loading</div>;
  }

  const Component = getBlock(block.type);

  return (
    <Component {...block.properties}>
      {block.content.map(blockId => <Block key={blockId} id={blockId} />)}
    </Component>
  );
}