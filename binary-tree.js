/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    let toVisit = [this.root];
    let depthCount = 1;

    if (this.root === null) return 0;

    while (toVisit.length) {
      let current = toVisit.shift();

      if (current.left === null & current.right === null) {
        return depthCount;
      }

      if (current.left !== null) {
        toVisit.push(current.left);
      }

      if (current.right !== null) {
        toVisit.push(current.right);
      }
      depthCount++;
    }
    return depthCount;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    let toVisit = [this.root];
    let depthCount = 1;

    if (this.root === null) return 0;

    while (toVisit.length) {
      let current = toVisit.shift();

      if (current.left !== null &&
        (current.left.left !== null || current.left.right !== null)) {
        toVisit.push(current.left);
      }

      if (current.right !== null &&
        (current.right.left !== null || current.right.right !== null)) {
        toVisit.push(current.right);
      }
      depthCount++;
    }
    return depthCount;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, node = this.root) {
    let smallestVal = null;
    let toVisit = [this.root];

    if (this.root === null) return null;

    while (toVisit.length) {
      let current = toVisit.shift();

      if (current.val > lowerBound) {
        if (smallestVal === null) {
          smallestVal = current.val;
        } else {
          smallestVal = smallestVal > current.val ? current.val : smallestVal;
        }
      }

      if (current.left !== null) {
        toVisit.push(current.left);
      }
      if (current.right !== null) {
        toVisit.push(current.right);
      }
    }
    return smallestVal;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
