import { ItemPile } from './items';
import { Recipe, calculatePlantCount, findRecipe } from './recipes';

export class ProductionTree {
  rootItem?: TreeNode<ItemPile>;

  constructor(item: ItemPile) {
    this.buildTree(item);
  }

  buildTree(item: ItemPile) {
    this.rootItem = new TreeNode(item);
    this.processNode(this.rootItem);
  }

  processNode(node: TreeNode<ItemPile>) {
    console.log('processing ' + node.value.itemId);

    const recipe = findRecipe(node.value.itemId);

    if (recipe == null) {
      return;
    }

    if (recipe.type == 'growth') {
      this.processGrowthRecipeNode(node, recipe);
      return;
    }

    node.children = recipe.consumedItems.map((x) => {
      const producedItemPile = recipe.producedItems.find(
        (x) => x.itemId == node.value.itemId
      );
      const consumedItemPile = { ...x };
      const amount =
        (consumedItemPile.amount / producedItemPile!.amount) *
        node.value.amount;
      consumedItemPile.amount = amount;

      return new TreeNode(consumedItemPile);
    });
    node.children.forEach((x) => this.processNode(x));
  }

  processGrowthRecipeNode(node: TreeNode<ItemPile>, recipe: Recipe) {
    const pile = calculatePlantCount(node.value, recipe);
    if (pile == null) {
      return;
    }

    const leaf = new TreeNode(pile);
    leaf.children = recipe.consumedItems.map((x) => {
      const consumedItemPile = { ...x };
      const amount = consumedItemPile.amount * pile.amount;
      consumedItemPile.amount = +amount.toFixed(2);

      return new TreeNode(consumedItemPile);
    });

    node.children = [leaf];
    leaf.children.forEach((x) => this.processNode(x));
  }

  public print() {
    if (this.rootItem == null) {
      return;
    }

    console.log(this.rootItem.value);
    this.printNode(this.rootItem);
  }

  printNode(node: TreeNode<ItemPile>) {
    if (node.children.length == 0) {
      return;
    }

    node.children.forEach((x) => {
      console.log(x.value);
      this.printNode(x);
    });
  }
}

export class TreeNode<T> {
  value: T;
  children: TreeNode<T>[] = [];

  constructor(value: T) {
    this.value = value;
  }
}
