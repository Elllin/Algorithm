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

  //최소값 찾기
  BinarySearchTree.prototype.min = function () {
    return _minNode(this.root);
  };

  function _minNode(node) {
    // 두번째 파라미터는 remove에서 사용
    if (!node) return false;
    while (node.left) {
      node = node.left;
    }
    return node.key;
  }

  //최대값 찾기
  BinarySearchTree.prototype.max = function () {
    return _maxNode(this.root);
  };

  function _maxNode(node) {
    if (!node) return false;
    while (node.right) {
      node = node.right;
    }
    return node.key;
  }

  //특정값 찾기
  BinarySearchTree.prototype.search = function (key) {
    return _searchNode(this.root, key);
  };

  function _searchNode(node, key) {
    if (!node) return false;

    if (node.key < key) {
      return _searchNode(node.right, key);
    } else if (node.key > key) {
      return _searchNode(node.left, key);
    } else {
      return true;
    }
  }

  //삭제하기
  BinarySearchTree.prototype.remove = function (key) {
    this.root = _removeNode(this.root, key);
  };

  function _removeNode(node, key) {
    if (!node) return false;

    if (node.key < key) {
      node.right = _removeNode(node.right, key);
      return node;
    } else if (node.key > key) {
      node.left = _removeNode(node.left, key);
      return node;
    } else {
      //리프노드일 경우
      if (!node.left && !node.right) {
        node = null;
        return node;
      }
      //자식노드가 하나 있을 경우
      if (!node.right) {
        node = node.left;
        return node;
      } else if (!node.left) {
        node = node.right;
        return node;
      }
      //자식노드가 둘다 있을 경우
      const minNode = _minNode(node.right);
      node.key = minNode;
      node.right = _removeNode(node.right, minNode);
      return node;
    }
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
print(tree.min());
print(tree.max());
print(tree.search(6) ? "존재합니다" : "존재하지 않습니다.");
tree.remove(6);
print(tree.search(6) ? "존재합니다" : "존재하지 않습니다.");

function print(result) {
  console.log(result);
}
