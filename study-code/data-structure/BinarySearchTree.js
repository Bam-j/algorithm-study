class BinarySearchTree {
    constructor() {
        this.root;
        this.size = 0;
    }

    _insertNode(root, node) {
        if (root === null) {
            return node;
        }

        if (node.data < root.data) {
            root.leftNode = this._insertNode(root.leftNode, node);

            return root;
        }
        else {
            root.rightNode = this._insertNode(root.rightNode, node);

            return root;
        }
        return root;
    }

    insertNode(data) {
        const newNode = new Node(data);

        if (this.size === 0) {
            this.root = newNode;
        }
        else {
            this._insertNode(this.root, newNode);
        }
    }

    _searchNode(data, node) {
        if (node) {
            if (data < node.data) {
                return this._searchNode(data, node.leftNode);
            }
            else if (data > node.data) {
                return this._searchNode(data, node.rightNode);
            }
            else {
                return node;
            }
        }
        else {
            return null;
        }
    }


    searchNode(data) {
        if (this.root) {
            return this._searchNode(data, this.root);
        }
        else {
            return null;
        }
    }

    _deleteNode(root, data) {
        let newRootNode;
        let change;
        let temp;

        if (root === null) {
            return false;
        }

        if (data < root.data) {
            root.leftNode = this._deleteNode(root.leftNode, data);
        }
        else if (data > root.data) {
            root.rightNode = this._deleteNode(root.rightNode, data);
        }
        else {
            if (root.leftNode === null) {
                newRootNode = root.rightNode;
            }
            else if (root.rightNode === null) {
                newRootNode = root.leftNode;
            }
            else {
                change = root.leftNode;

                while (change.rightNode !== null) {
                    change = change.rightNode;
                }

                temp = root.data;
                change.data = temp;
                root.leftNode = this._deleteNode(root.leftNode, change.data);
            }
        }
    }

    deleteNode(key) {
        const node = this._deleteNode(this.root, key);

        if (node) {
            this.root = node;
            this.size--;

            if (this.size === 0) {
                this.root = null;
            }
        }

        return true;
    }
}