class Tree {
  rootItem?: TreeNode<ItemPile>;

  public buildTree(item: ItemPile) {
    this.rootItem = new TreeNode(item);

    let current = this.rootItem;

    const recipe = getFirstRecipe(item.itemId);

    if (recipe != null) {
      current.children = recipe.consumedItems.map((x) => new TreeNode(x));
    }

  }
}

class TreeNode<T> {
  value: T;
  children: TreeNode<T>[] = [];

  constructor(value: T) {
    this.value = value;
  }
}
