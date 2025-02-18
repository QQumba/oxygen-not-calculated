/* eslint-disable @next/next/no-img-element */
import { ItemPile } from '@/data/items';
import { ProductionTree, TreeNode } from '@/data/production-tree';

export default function TreeView({ tree }: { tree: ProductionTree }) {
  const root = tree?.rootItem;

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center p-4 bg-slate-50 m-4 overflow-x-auto">
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
        <div className="border border-oni-purple w-1/2 absolute left-1/2"></div>
      )}
      {isRightSubtree() && (
        <div className="border border-oni-purple w-1/2 absolute right-1/2"></div>
      )}
      {!isRootNode && <div className="border border-oni-purple h-4"></div>}
      <div className="px-4">
        <div className="bg-slate-100 border-2 border-oni-purple rounded p-2 w-20 flex flex-col">
          <div className="h-12 flex justify-center">
            <img
              className="m-auto max-h-12 max-w-12"
              src={`/images/${node.value.itemId}.png`}
              alt={node.value.itemId}
            ></img>
          </div>
          <div className="h-10 flex justify-center">
            <div className="text-oni-purple font-bold text-center m-auto">
              {node.value.amount}{' '}
              {node.value.amountUnit != 'count' ? node.value.amountUnit : ''}
            </div>
          </div>
        </div>
      </div>
      {hasChildren() && <div className="border border-oni-purple h-4"></div>}
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
