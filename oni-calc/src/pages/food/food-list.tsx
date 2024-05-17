import { Items } from '@/data/items';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

/* eslint-disable @next/next/no-img-element */
export default function FoodList() {
  const params = useSearchParams();
  const itemId = params?.get('itemId');
  const food = Items.filter((x) => x.type == 'food');

  function isSelected(foodId: string): boolean {
    return itemId == foodId;
  }

  return (
    <div className="mt-4 flex flex-wrap">
      {food.map((f) => (
        <Link
          key={f.id}
          href={{ pathname: '/food', query: { itemId: f.id } }}
          scroll={false}
        >
          <div
            className={`shadow border rounded p-2 cursor-pointer m-1 hover:bg-slate-300 ${
              isSelected(f.id) ? 'bg-slate-300' : 'bg-slate-100'
            }`}
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
        </Link>
      ))}
    </div>
  );
}
