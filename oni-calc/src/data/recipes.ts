import { Item, ItemPile, Items } from './items';

export type RecipeType = 'production' | 'growth';

export type Recipe = {
  producerId: string;
  type: RecipeType;
  consumedItems: ItemPile[];
  producedItems: ItemPile[];

  growthTime?: number;
};

export function findRecipe(itemId: string): Recipe | undefined {
  const recipe = Recipes.find(
    (x) => x.producedItems.findIndex((i) => i.itemId == itemId) != -1
  );
  return recipe;
}

export function getPlantCount(
  foodId: string,
  kcalPerCycle: number
): [Item, number] | null {
  const food = Items.find((x) => x.id == foodId)!;

  const growthRecipe = findRecipe(foodId);

  if (growthRecipe?.type != 'growth') {
    return null;
  }

  const plant = Items.find((x) => x.id == growthRecipe.producerId)!;

  const plantYieldPerCycle =
    (growthRecipe.producedItems.find((x) => x.itemId)!.amount *
      food.unitConversionMap!.get('kcal')!) /
    growthRecipe.growthTime!;
  const plantCount = kcalPerCycle / plantYieldPerCycle;

  return [plant, +plantCount.toFixed(3)];
}

export function calculatePlantCount(
  pile: ItemPile,
  recipe: Recipe
): ItemPile | null {
  const plant = Items.find((x) => x.id == recipe.producerId)!;

  const plantYieldPerCycle =
    recipe.producedItems.find((x) => x.itemId)!.amount / recipe.growthTime!;
  const plantCount = +(pile.amount / plantYieldPerCycle).toFixed(3);

  const plantPile: ItemPile = {
    itemId: plant.id,
    amount: plantCount,
    amountUnit: 'count',
  };

  return plantPile;
}

const Recipes: Recipe[] = [
  {
    // production recipes
    producerId: 'gas_range',
    type: 'production',
    consumedItems: [
      {
        itemId: 'frost_bun',
        amount: 1,
        amountUnit: 'kg',
      },
      {
        itemId: 'lettuce',
        amount: 1,
        amountUnit: 'kg',
      },
      {
        itemId: 'barbeque',
        amount: 1,
        amountUnit: 'kg',
      },
    ],
    producedItems: [
      {
        itemId: 'frost_burger',
        amount: 1,
        amountUnit: 'kg',
      },
    ],
  },
  {
    producerId: 'electric_grill',
    type: 'production',
    consumedItems: [
      {
        itemId: 'meat',
        amount: 2,
        amountUnit: 'kg',
      },
    ],
    producedItems: [
      {
        itemId: 'barbeque',
        amount: 1,
        amountUnit: 'kg',
      },
    ],
  },
  {
    producerId: 'electric_grill',
    type: 'production',
    consumedItems: [
      {
        itemId: 'sleet_wheat_grain',
        amount: 3,
        amountUnit: 'count',
      },
    ],
    producedItems: [
      {
        itemId: 'frost_bun',
        amount: 1,
        amountUnit: 'kg',
      },
    ],
  },
  {
    producerId: 'microbe_musher',
    type: 'production',
    consumedItems: [
      {
        itemId: 'nosh_bean',
        amount: 6,
        amountUnit: 'count',
      },
      {
        itemId: 'water',
        amount: 50,
        amountUnit: 'kg',
      },
    ],
    producedItems: [
      {
        itemId: 'tofu',
        amount: 1,
        amountUnit: 'kg',
      },
    ],
  },
  {
    producerId: 'gas_range',
    type: 'production',
    consumedItems: [
      {
        itemId: 'tofu',
        amount: 1,
        amountUnit: 'kg',
      },
      {
        itemId: 'pincha_peppernut',
        amount: 1,
        amountUnit: 'kg',
      },
    ],
    producedItems: [
      {
        itemId: 'spicy_tofu',
        amount: 1,
        amountUnit: 'kg',
      },
    ],
  },
  {
    producerId: 'ethanol_distiller',
    type: 'production',
    consumedItems: [
      {
        itemId: 'lumber',
        amount: 1,
        amountUnit: 'kg',
      },
    ],
    producedItems: [
      {
        itemId: 'ethanol',
        amount: 1 / 2,
        amountUnit: 'kg',
      },
      {
        itemId: 'polluted_dirt',
        amount: 1 / 3,
        amountUnit: 'kg',
      },
      {
        itemId: 'carbon_dioxide',
        amount: 5 / 3,
        amountUnit: 'kg',
      },
    ],
  },
  // growth recipes
  {
    producerId: 'mealwood',
    type: 'growth',
    producedItems: [
      {
        itemId: 'meal_lice',
        amount: 1,
        amountUnit: 'kg',
      },
    ],
    consumedItems: [],
    growthTime: 3,
  },
  {
    producerId: 'sleet_wheat',
    type: 'growth',
    consumedItems: [
      {
        itemId: 'water',
        amount: 20,
        amountUnit: 'kg',
      },
      {
        itemId: 'dirt',
        amount: 5,
        amountUnit: 'kg',
      },
    ],
    producedItems: [
      {
        itemId: 'sleet_wheat_grain',
        amount: 18,
        amountUnit: 'count',
      },
    ],
    growthTime: 18,
  },
  {
    producerId: 'waterweed',
    type: 'growth',
    producedItems: [
      {
        itemId: 'lettuce',
        amount: 12,
        amountUnit: 'count',
      },
    ],
    consumedItems: [],
    growthTime: 12,
  },
  {
    producerId: 'pincha_pepperplant',
    type: 'growth',
    producedItems: [
      {
        itemId: 'pincha_peppernut',
        amount: 4,
        amountUnit: 'count',
      },
    ],
    consumedItems: [
      {
        itemId: 'polluted_water',
        amount: 35,
        amountUnit: 'kg',
      },
      {
        itemId: 'phosphorite',
        amount: 1,
        amountUnit: 'kg',
      },
    ],
    growthTime: 8,
  },
  {
    producerId: 'nosh_sprout',
    type: 'growth',
    producedItems: [
      {
        itemId: 'nosh_bean',
        amount: 12,
        amountUnit: 'count',
      },
    ],
    consumedItems: [
      {
        itemId: 'ethanol',
        amount: 20,
        amountUnit: 'kg',
      },
      {
        itemId: 'dirt',
        amount: 5,
        amountUnit: 'kg',
      },
    ],
    growthTime: 21,
  },
  {
    producerId: 'arbor_tree',
    type: 'growth',
    producedItems: [
      {
        itemId: 'lumber',
        amount: 5 * 300,
        amountUnit: 'kg',
      },
    ],
    consumedItems: [
      {
        itemId: 'polluted_water',
        amount: 70,
        amountUnit: 'kg',
      },
      {
        itemId: 'dirt',
        amount: 10,
        amountUnit: 'kg',
      },
    ],
    growthTime: 4.5,
  },
];
