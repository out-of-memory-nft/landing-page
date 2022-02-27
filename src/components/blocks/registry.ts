
type FunctionalComponent = (props: any) => JSX.Element;

const registry: Record<string, FunctionalComponent> = {};

export function addBlock(id: string, block: FunctionalComponent) {
  registry[id] = block;
}

export function getBlock(id: string) {
  if (id in registry) {
    return registry[id];
  } else {
    throw new Error(`Block id '${id}' not found in block registry`);
  }
}