type Item = {
  id: string;
  name: string;
  unitConversionMap?: [Unit, number][];
};

type ItemPile = {
  itemId: string;
  amount: number;
  amountUnit: Unit;
};

const Items: Item[] = [
  // food
  {
    id: 'frost_burger',
    name: 'Frost Burger',
    unitConversionMap: [['kcal', 6000]],
  },
  {
    id: 'frost_bun',
    name: 'Frost Bun',
    unitConversionMap: [['kcal', 1200]],
  },
  {
    id: 'lettuce',
    name: 'Lettuce',
    unitConversionMap: [['kcal', 400]],
  },
  {
    id: 'barbeque',
    name: 'Barbeque',
    unitConversionMap: [['kcal', 4000]],
  },
  {
    id: 'meat',
    name: 'Meat',
    unitConversionMap: [['kcal', 1600]],
  },
  // items
  {
    id: 'sleet_wheat_grain',
    name: 'Sleet Wheat Grain',
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
  // plants
  {
    id: 'mealwood',
    name: 'Mealwood',
  },
  {
    id: 'sleet_wheat',
    name: 'Sleet Wheat',
  },
];
