import { Items } from '@/data/items';

/* eslint-disable @next/next/no-img-element */
export default function FoodList({
  selectedFood,
  setSelectedFood,
}: {
  selectedFood: string | null;
  setSelectedFood: (id: string) => void;
}) {
  const food = Items.filter((x) => x.type == 'food');

  function isSelected(foodId: string): boolean {
    return selectedFood == foodId;
  }

  return (
    <div className="mt-4 flex flex-wrap space-x-2">
      {food.map((f) => (
        <div
          className={`shadow border rounded p-2 cursor-pointer hover:bg-slate-300 ${
            isSelected(f.id) ? 'bg-slate-300' : 'bg-slate-100'
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
                src={`/images/${f.id}.png`}
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
