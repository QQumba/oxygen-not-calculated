import { Unit } from './misc';

type ItemType = 'food';

export type Item = {
  id: string;
  name: string;
  unitConversionMap?: Map<Unit, number>;
  type?: ItemType;
};

export type ItemPile = {
  itemId: string;
  amount: number;
  amountUnit: Unit;
};

export function createFoodPile(itemId: string, kcal: number): ItemPile | null {
  const item = Items.find((x) => x.id == itemId && x.type == 'food');
  if (item == null) {
    return null;
  }

  const kcalPerItem = item.unitConversionMap?.get('kcal')!;
  const pile: ItemPile = {
    itemId: itemId,
    amount: +(kcal / kcalPerItem).toFixed(2),
    amountUnit: 'kg',
  };

  return pile;
}

export const Items: Item[] = [
  // food
  {
    id: 'frost_burger',
    name: 'Frost Burger',
    unitConversionMap: new Map([['kcal', 6000]]),
    type: 'food',
  },
  {
    id: 'frost_bun',
    name: 'Frost Bun',
    unitConversionMap: new Map([['kcal', 1200]]),
    type: 'food',
  },
  {
    id: 'lettuce',
    name: 'Lettuce',
    unitConversionMap: new Map([['kcal', 400]]),
    type: 'food',
  },
  {
    id: 'barbeque',
    name: 'Barbeque',
    unitConversionMap: new Map([['kcal', 4000]]),
    type: 'food',
  },
  {
    id: 'meat',
    name: 'Meat',
    unitConversionMap: new Map([['kcal', 1600]]),
    type: 'food',
  },
  {
    id: 'berry_sludge',
    name: 'Berry Sludge',
    unitConversionMap: new Map([['kcal', 4000]]),
    type: 'food',
  },
  {
    id: 'bog_jelly',
    name: 'Bog Jelly',
    unitConversionMap: new Map([['kcal', 1840]]),
    type: 'food',
  },
  {
    id: 'bristle_berry',
    name: 'Bristle Berry',
    unitConversionMap: new Map([['kcal', 1600]]),
    type: 'food',
  },
  {
    id: 'cooked_seafood',
    name: 'Cooked Seafood',
    unitConversionMap: new Map([['kcal', 1600]]),
    type: 'food',
  },
  {
    id: 'curried_beans',
    name: 'Curried Beans',
    unitConversionMap: new Map([['kcal', 5000]]),
    type: 'food',
  },
  {
    id: 'meal_lice',
    name: 'Meal Lice',
    unitConversionMap: new Map([['kcal', 600]]),
    type: 'food',
  },
  {
    id: 'spicy_tofu',
    name: 'Spicy Tofu',
    unitConversionMap: new Map([['kcal', 4000 ]]),
    type: 'food',
  },
  {
    id: 'tofu',
    name: 'Tofu',
    unitConversionMap: new Map([['kcal', 3600  ]]),
    type: 'food',
  },
  // items
  {
    id: 'sleet_wheat_grain',
    name: 'Sleet Wheat Grain',
  },
  {
    id: 'nosh_bean',
    name: 'Nosh Bean',
  },
  {
    id: 'pincha_peppernut',
    name: 'Pincha Peppernut',
  },
  {
    id: 'water',
    name: 'Water',
  },
  {
    id: 'polluted_water',
    name: 'Polluted Water',
  },
  {
    id: 'ethanol',
    name: 'Ethanol',
  },
  {
    id: 'dirt',
    name: 'Dirt',
  },
  {
    id: 'polluted_dirt',
    name: 'Polluted Dirt',
  },
  {
    id: 'lumber',
    name: 'Lumber'
  },
  {
    id: 'phosphorite',
    name: 'Phosphorite',
  },
  {
    id: 'carbon_dioxide',
    name: 'Carbon Dioxide',
  },
  {
    id: 'bleach_stone',
    name: 'Bleach Stone',
  },
  // stations
  {
    id: 'gas_range',
    name: 'Gas Range',
  },
  {
    id: 'electric_grill',
    name: 'Electric Grill',
  },
  {
    id: 'ethanol_distiller',
    name: 'Ethanol Distiller',
  },
  // plants
  {
    id: 'mealwood',
    name: 'Mealwood',
  },
  {
    id: 'sleet_wheat',
    name: 'Sleet Wheat',
  },
  {
    id: 'waterweed',
    name: 'Waterweed',
  },
  {
    id: 'nosh_sprout',
    name: 'Nosh Sprout',
  },
  {
    id: 'pincha_pepperplant',
    name: 'Pincha Pepperplant',
  },
  {
    id: 'arbor_tree',
    name: 'Arbor Tree',
  },
];
