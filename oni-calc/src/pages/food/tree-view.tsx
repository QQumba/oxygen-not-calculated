/* eslint-disable @next/next/no-img-element */
import { ItemPile } from '@/data/items';
import { Tree, TreeNode } from '@/data/production-tree';

export default function TreeView({
  drawTree,
}: {
  drawTree: () => Tree | null;
}) {
  const tree = drawTree();
  const root = tree?.rootItem;

  return (
    <div className="flex flex-col items-center">
      {root && <TreeCard node={root}></TreeCard>}
    </div>
  );
}

function TreeCard({ node }: { node: TreeNode<ItemPile> }) {
  return (
    <div className="flex flex-col items-center border flex-grow">
      <div className="shadow border rounded p-4 w-24 flex flex-col m-2">
        <div className="h-16 flex justify-center">
          <img
            className="m-auto max-h-16 max-w-16"
            src={`/images/${node.value.itemId}.png`}
            alt={node.value.itemId}
          ></img>
        </div>
        <div className="h-10 max-w-16 flex justify-center">
          <div className="text-gray-500 text-sm text-center m-auto">
            {node.value.amount} {node.value.amountUnit}
          </div>
        </div>
      </div>
      <div className="flex">
        {node.children.map((x) => (
          <TreeCard key={x.value.itemId} node={x}></TreeCard>
        ))}
      </div>
    </div>
  );
}
