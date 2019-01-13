
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

    // Performs inorder traversal of a tree 
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preOrder(node) {
       if(node !== null) {
           console.log(node.data);
           this.preOrder(node.left);
           this.preOrder(node.right);
       }
    }

    postOrder(node) {
        if(node != null){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data);
        }
    }


    // returns root of the tree 
    getRootNode() {
        return this.root;
    }

}

var BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

console.log("inorder traversal");
// 5 7 9 10 13 15 17 22 25 27
var root = BST.getRootNode(); 
BST.inorder(root); 

console.log("preorder traversal");
// 15 10 7 5 9 13 25 22 17 27
var root = BST.getRootNode(); 
BST.preOrder(root); 

console.log("postorder traversal");
// 5 9 7 13 10 17 22 27 25 15
var root = BST.getRootNode(); 
BST.postOrder(root); 
