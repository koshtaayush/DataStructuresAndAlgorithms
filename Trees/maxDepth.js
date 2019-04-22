
// Node class 
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binary Search tree class 
class BinarySearchTree {
    constructor() {
        // root of a binary seach tree 
        this.root = null;
    }

    insert(data) {
        // Creating a node and initailising 
        // with data 
        var newNode = new Node(data);

        // root is null then node will 
        // be added to the tree and made root. 
        if (this.root === null)
            this.root = newNode;
        else

            // find the correct position in the 
            // tree and add the node 
            this.insertNode(this.root, newNode);
    }

    // Method to insert a node in a tree 
    // it moves over the tree to find the location 
    // to insert a node with a given data 
    insertNode(node, newNode) {
        // if the data is less than the node 
        // data move left of the tree 
        if (newNode.data < node.data) {
            // if left is null insert node here 
            if (node.left === null)
                node.left = newNode;
            else

                // if left is not null recurr until 
                // null is found 
                this.insertNode(node.left, newNode);
        }

        // if the data is more than the node 
        // data move right of the tree 
        else {
            // if right is null insert node here 
            if (node.right === null)
                node.right = newNode;
            else

                // if right is not null recurr until 
                // null is found 
                this.insertNode(node.right, newNode);
        }
    }

    // returns root of the tree 
    getRootNode() {
        return this.root;
    }

    preOrder(node) {
        if(node !== null) {
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
     }

    maxDepth(node){
        if(node == null){
            return 0;
        }else{
            var lDepth = this.maxDepth(node.left);
            var rDepth = this.maxDepth(node.right);

            return (lDepth > rDepth) ? (lDepth + 1) : (rDepth + 1);
        }
    }
}

var BST = new BinarySearchTree(); 
   
//its not a binary search tree, its a normal binary tree
BST.root = new Node(1); 
BST.root.left = new Node(2); 
BST.root.right = new Node(3); 
BST.root.left.left = new Node(4); 
BST.root.left.right = new Node(5); 

console.log("pre order");
BST.preOrder(BST.getRootNode());
console.log("max depth");
console.log(BST.maxDepth(BST.getRootNode()));