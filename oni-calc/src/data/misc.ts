import { ItemPile } from './items';

export type Unit = 'kg' | 'count' | 'kcal';

type GrowthRecipe = {
  plantId: string;
  item: ItemPile;
};

const growthRecipes: GrowthRecipe[] = [
  {
    plantId: 'mealwood',
    item: {
      itemId: 'meal_lice',
      amount: 1,
      amountUnit: 'kg',
    },
  },
  {
    plantId: 'sleet_wheat',
    item: {
      itemId: 'sleet_wheat_grain',
      amount: 18,
      amountUnit: 'count',
    },
  },
];
