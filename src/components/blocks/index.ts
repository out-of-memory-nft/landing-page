import { addBlock } from './registry';
import BPage from './generic/BPage';
import BText from './generic/BText';
import BH2 from './generic/BH2';
import BImage from './generic/BImage';
import BPaper from './generic/BPaper';
import BContainer from './generic/BContainer';
import BSubtitle from './generic/BSubtitle';
import BStack from './generic/BStack';
import BBox from './generic/BBox';

import {
  BDivider,
} from './generic';

import {
  BAvailableOnOpenSea,
  BNFTMarketing,
} from './custom';

export { default as Block } from './Block';
export type { BlockModel } from './Block';

addBlock('page', BPage);
addBlock('text', BText);
addBlock('h2', BH2);
addBlock('image', BImage);
addBlock('paper', BPaper);
addBlock('container', BContainer);
addBlock('subtitle', BSubtitle);
addBlock('stack', BStack);
addBlock('box', BBox);
addBlock('divider', BDivider);

addBlock('available-on-open-sea', BAvailableOnOpenSea);
addBlock('nft-marketing', BNFTMarketing);
