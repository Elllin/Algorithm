function BinarySearchTree() {
  this.root = null;

  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  function _insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (!node.left) {
        node.left = newNode;
      } else {
        _insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        _insertNode(node.right, newNode);
      }
    }
  }

  BinarySearchTree.prototype.insert = function (key) {
    const newNode = new Node(key);

    if (!this.root) {
      this.root = newNode;
    } else {
      _insertNode(this.root, newNode);
    }
  };

  // 전위순회

  BinarySearchTree.prototype.preOrderTraverse = function (callback) {
    _preOrderTraverseNode(this.root, callback);
  };

  function _preOrderTraverseNode(node, callback) {
    if (!node) return;
    callback(node.key);
    _preOrderTraverseNode(node.left, callback);
    _preOrderTraverseNode(node.right, callback);
  }

  // 중위순회

  BinarySearchTree.prototype.inOrderTraverse = function (callback) {
    _inOrderTraverseNode(this.root, callback);
  };

  function _inOrderTraverseNode(node, callback) {
    if (!node) return;

    _inOrderTraverseNode(node.left, callback);
    callback(node.key);
    _inOrderTraverseNode(node.right, callback);
  }

  // 후위순회

  BinarySearchTree.prototype.postOrderTraverse = function (callback) {
    _postOrderTraverseNode(this.root, callback);
  };

  function _postOrderTraverseNode(node, callback) {
    if (!node) return;

    _postOrderTraverseNode(node.left, callback);
    _postOrderTraverseNode(node.right, callback);
    callback(node.key);
  }
}

const tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
tree.inOrderTraverse(print);

function print(node) {
  console.log(node);
}
