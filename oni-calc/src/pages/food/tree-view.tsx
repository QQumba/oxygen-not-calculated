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
    <div className='flex justify-center'>
      <div className="flex flex-col items-center p-4 bg-slate-50 m-4">
        {root && (
          <TreeCard
            node={root}
            siblingsCount={1}
            index={0}
            isRootNode={true}
          ></TreeCard>
        )}
      </div>
    </div>
  );
}

function TreeCard({
  node,
  siblingsCount,
  index,
  isRootNode = false,
}: {
  node: TreeNode<ItemPile>;
  siblingsCount: number;
  index: number;
  isRootNode: boolean;
}) {
  function isLeftSubtree(): boolean {
    if (siblingsCount == 1) {
      return false;
    }

    return index < siblingsCount - 1;
  }

  function isRightSubtree(): boolean {
    if (siblingsCount == 1) {
      return false;
    }

    return index > 0;
  }

  function hasChildren(): boolean {
    return node.children.length > 0;
  }

  return (
    <div className="flex flex-col items-center flex-grow relative">
      {isLeftSubtree() && (
        <div className="border border-gray-300 w-1/2 absolute left-1/2"></div>
      )}
      {isRightSubtree() && (
        <div className="border border-gray-300 w-1/2 absolute right-1/2"></div>
      )}
      {!isRootNode && <div className="border border-gray-300 h-4"></div>}
      <div className="shadow border rounded p-4 w-24 flex flex-col">
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
      {hasChildren() && <div className="border border-gray-300 h-4"></div>}
      <div className="flex w-full">
        {node.children.map((x, i) => (
          <TreeCard
            key={x.value.itemId}
            node={x}
            siblingsCount={node.children.length}
            index={i}
            isRootNode={false}
          ></TreeCard>
        ))}
      </div>
    </div>
  );
}
