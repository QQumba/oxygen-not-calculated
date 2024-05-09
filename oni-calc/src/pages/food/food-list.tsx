/* eslint-disable @next/next/no-img-element */

import { Food, Foods, foodId } from '@/data/food-data';

export default function FoodList({
  selectedFood,
  setSelectedFood,
}: {
  selectedFood: foodId | null;
  setSelectedFood: (id: foodId) => void;
}) {
  const food = Foods;

  function isSelected(food: Food): boolean {
    return selectedFood == food.id;
  }

  return (
    <div className="mt-4 flex flex-wrap space-x-2">
      {food.map((f) => (
        <div
          className={`shadow border rounded p-2 cursor-pointer hover:bg-slate-300 ${
            isSelected(f) ? 'bg-slate-300' : 'bg-slate-100'
          }`}
          key={f.name}
          onClick={() => {
            setSelectedFood(f.id);
          }}
        >
          <div className="flex flex-col">
            <div className="h-16 flex justify-center">
              <img
                className="m-auto max-h-16 max-w-16"
                src={`/images/${f.name}.png`}
                alt={f.name}
              ></img>
            </div>
            <div className="h-10 max-w-16 flex justify-center">
              <div className="text-gray-500 text-sm text-center m-auto">
                {f.name}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
