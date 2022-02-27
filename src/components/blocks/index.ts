import BText from './BText';
import { addBlock } from './registry';
export { default as Block } from './Block';
export type { BlockProps } from './Block';

addBlock('text', BText);
