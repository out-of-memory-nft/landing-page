import { BlockModel } from "../components/blocks";

const blocks: Record<string, BlockModel> = {};

export function registerBlock(id: string, block: BlockModel) {
  blocks[id] = block;
}

export function getBlock(id: string): Promise<BlockModel> {
  return Promise.resolve(blocks[id]);
}
