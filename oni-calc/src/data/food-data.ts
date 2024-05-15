export type Food = {
  id: foodId;
  name: string;
  calories: number;
  sourcePlantId: plantId | null;
};

export type foodId =
  | 'bbq'
  | 'sludge'
  | 'bog_jelly'
  | 'berry'
  | 'seafood'
  | 'curried_beans'
  | 'meal_lice'
  | 'burger';

export type Plant = {
  id: plantId;
  name: string;
  growthTime: number;
  yieldRate: number;
};

export type plantId = 'bog_bucket' | 'bristle_berry' | 'mealwood';

export const Foods: Food[] = [
  {
    id: 'bbq',
    name: 'Barbeque',
    calories: 4000,
    sourcePlantId: null,
  },
  {
    id: 'sludge',
    name: 'Berry Sludge',
    calories: 4000,
    sourcePlantId: null,
  },
  {
    id: 'bog_jelly',
    name: 'Bog Jelly',
    calories: 1840,
    sourcePlantId: 'bog_bucket',
  },
  {
    id: 'berry',
    name: 'Bristle Berry',
    calories: 1600,
    sourcePlantId: 'bristle_berry',
  },
  {
    id: 'seafood',
    name: 'Cooked Seafood',
    calories: 1600,
    sourcePlantId: null,
  },
  {
    id: 'curried_beans',
    name: 'Curried Beans',
    calories: 5000,
    sourcePlantId: null,
  },
  {
    id: 'meal_lice',
    name: 'Meal Lice',
    calories: 600,
    sourcePlantId: 'mealwood',
  },
  {
    id: 'burger',
    name: 'Frost Burger',
    calories: 6000,
    sourcePlantId: null,
  },
];

export const Plants: Plant[] = [
  {
    id: 'bog_bucket',
    name: 'Bog Bucket',
    growthTime: 6.6,
    yieldRate: 1,
  },
  {
    id: 'bristle_berry',
    name: 'Bristle Blossom',
    growthTime: 6,
    yieldRate: 1,
  },
  {
    id: 'mealwood',
    name: 'Mealwood',
    growthTime: 3,
    yieldRate: 1,
  },
];

export function getPlantCount(
  foodId: string,
  kcalPerCycle: number
): [Plant, number] | null {
  const food = Foods.find((x) => x.id == foodId)!;

  if (food.sourcePlantId == null) {
    return null;
  }

  const plant = Plants.find((x) => x.id == food.sourcePlantId)!;

  const plantYieldPerCycle =
    (plant.yieldRate * food.calories) / plant.growthTime;
  const plantCount = kcalPerCycle / plantYieldPerCycle;

  return [plant, +plantCount.toFixed(2)];
}
