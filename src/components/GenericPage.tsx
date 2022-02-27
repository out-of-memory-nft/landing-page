import { Block, BlockProps } from "./blocks";
import { v4 as uuid } from 'uuid';

interface GenericPageProps {
  blocks: BlockProps[],
}

const props: GenericPageProps = {
  blocks: [
    {
      id: uuid(),
      type: 'text',
      properties: {
        text: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at pretium est. Morbi
          elementum tortor turpis, at pulvinar diam fermentum interdum. Nunc sed neque est. Proin
          ultricies hendrerit viverra. Vivamus vel maximus purus. Phasellus faucibus sagittis dolor,
          sed feugiat magna congue malesuada. Quisque varius vel velit vel rhoncus.
        `
      }
    }
  ]
}

export default function GenericPage() {
  return (
    <div>
      {props.blocks.map(block => <Block {...block} />)}
    </div>
  );
}