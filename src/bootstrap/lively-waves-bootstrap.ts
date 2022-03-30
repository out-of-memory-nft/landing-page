import { registerBlock } from '../services/block-service';
import defaults from './defaults';

const blocks = [
  {
    id: '35c87213-1dd0-4483-8697-1e661bc7e92f',
    type: 'page',
    properties: {},
    content: [

    ],
  }
];

blocks.forEach((block) => registerBlock(block.id, block));
