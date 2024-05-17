import FoodList from './food-list';
import FoodSettings from './food-settings';
import { useEffect, useState } from 'react';
import { createFoodPile } from '@/data/items';
import { ProductionTree } from '@/data/production-tree';
import TreeView from './tree-view';
import { useSearchParams } from 'next/navigation';

export default function Food() {
  const params = useSearchParams();

  const itemId = params?.get('itemId');

  const [duplicantsCount, setDuplicants] = useState(12);

  // const [selectedFood, setSelectedFood] = useState<string>('');
  const [foodTree, setFoodTree] = useState<ProductionTree>();

  useEffect(() => {
    if (itemId != null) {
      createTree(itemId);
    }
  }, [itemId]);

  function createTree(itemId: string) {
    const pile = createFoodPile(itemId, duplicantsCount * 1000);
    if (pile == null) {
      return null;
    }

    const tree = new ProductionTree(pile);
    setFoodTree(tree);
  }

  return (
    <>
      <h1>Food</h1>
      <FoodSettings
        duplicants={duplicantsCount}
        setDuplicants={setDuplicants}
      ></FoodSettings>
      <FoodList></FoodList>
      {foodTree && <TreeView tree={foodTree}></TreeView>}
    </>
  );
}
