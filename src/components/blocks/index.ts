import BPage from './BPage';
import BText from './BText';
import BH2 from './BH2';
import BImage from './BImage';
import BPaper from './BPaper';
import { addBlock } from './registry';

export { default as Block } from './Block';
export type { BlockModel } from './Block';

addBlock('page', BPage);
addBlock('text', BText);
addBlock('h2', BH2);
addBlock('image', BImage);
addBlock('paper', BPaper);

