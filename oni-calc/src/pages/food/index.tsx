import FoodList from './food-list';
import FoodSettings from './food-settings';
import { useState } from 'react';
import { Item, createFoodPile } from '@/data/items';
import { Tree } from '@/data/production-tree';
import TreeView from './tree-view';

export default function Food() {
  const [duplicants, setDuplicants] = useState(12);
  const [selectedFood, setSelectedFood] = useState<string | null>(null);

  const [plantData, setPlantData] = useState<[Item, number]>();

  function drawTree(): Tree | null {
    if (selectedFood == null) {
      return null;
    }

    const pile = createFoodPile(selectedFood, duplicants * 1000);
    if (pile == null) {
      return null;
    }

    const tree = new Tree(pile);
    // tree.print();
    return tree;
  }

  return (
    <div>
      <h1>Food</h1>
      <FoodSettings
        duplicants={duplicants}
        setDuplicants={setDuplicants}
      ></FoodSettings>
      <div className="mt-4">
        {plantData && (
          <div>
            Plant: {plantData[0].name}, Count: {plantData[1]}
          </div>
        )}
      </div>
      <div>
        <button className="border rounded p-2" onClick={drawTree}>
          Print tree
        </button>
      </div>
      <FoodList
        selectedFood={selectedFood}
        setSelectedFood={setSelectedFood}
      ></FoodList>
      <TreeView drawTree={drawTree}></TreeView>
    </div>
  );
}
