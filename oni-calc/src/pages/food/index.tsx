import { Plant, foodId, getPlantCount } from '@/data/food-data';
import FoodList from './food-list';
import FoodSettings from './food-settings';
import { useState } from 'react';

export default function Food() {
  const [duplicants, setDuplicants] = useState(0);
  const [selectedFood, setSelectedFood] = useState<foodId | null>(null);

  const [plantData, setPlantData] = useState<[Plant, number]>();

  return (
    <div>
      <h1>Food</h1>
      <FoodSettings
        duplicants={duplicants}
        setDuplicants={setDuplicants}
      ></FoodSettings>
      <div className="mt-4">
        <button
          className="border rounded p-2"
          onClick={() => {
            if (selectedFood == null) {
              return;
            }

            const data = getPlantCount(selectedFood, duplicants * 1000);
            if (data == null) {
              return;
            }

            setPlantData(data);
          }}
        >
          Calculate
        </button>
        {plantData && (
          <div>
            Plant: {plantData[0].name}, Count: {plantData[1]}
          </div>
        )}
      </div>
      <FoodList
        selectedFood={selectedFood}
        setSelectedFood={setSelectedFood}
      ></FoodList>
    </div>
  );
}
