type RecipeType = 'production' | 'growth';

type Recipe = {
  stationId: string;
  type: RecipeType;
  consumedItems: ItemPile[];
  producedItems: ItemPile[];
};

function getFirstRecipe(itemId: string): Recipe | undefined {
  const recipe = Recipes.find(
    (x) => x.producedItems.findIndex((i) => i.itemId == itemId) != -1
  );
  return recipe;
}

const Recipes: Recipe[] = [
  {
    stationId: 'gas_range',
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
    stationId: 'electric_grill',
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
    stationId: 'electric_grill',
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
    stationId: 'mealwood',
    type: 'growth',
    producedItems: [
      {
        itemId: 'meal_lice',
        amount: 1,
        amountUnit: 'kg',
      },
    ],
    consumedItems: [],
  },
  {
    stationId: 'sleet_wheat',
    type: 'growth',
    producedItems: [
      {
        itemId: 'sleet_wheat_grain',
        amount: 18,
        amountUnit: 'count',
      },
    ],
    consumedItems: [],
  },
];
