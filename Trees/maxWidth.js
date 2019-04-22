
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

    maxWidth(){
        var maxWidth = 0;
        var width = 0;

        var h = this.height(tree.getRootNode());

        for(var i=0; i<h; i++){
            width = this.levelWidth(tree.getRootNode(), i);
            if(width > maxWidth){
                maxWidth = width;
            }
        }

        console.log("Max width of the tree " +maxWidth);

    }

    levelWidth(node, height){
        if(node == null){
            return 0;
        }

        if(height == 1){
            return 1;
        }

        if(height > 1){
            return this.levelWidth(node.left, height-1) + this.levelWidth(node.right, height-1);
        }

        return 0;
    }

    height(node){
        if(node == null){
            return 0;
        }

        var lh = this.height(node.left);
        var rh = this.height(node.right);

        return (lh > rh) ? lh + 1 : rh + 1;
    }
}

var tree = new BinarySearchTree(); 

        /* 
        Constructed bunary tree is: 
              1 
            /  \ 
           2    3 
         /  \    \ 
        4   5     8  
                 /  \ 
                6   7 
         */
tree.root = new Node(1); 
tree.root.left = new Node(2); 
tree.root.right = new Node(3); 
tree.root.left.left = new Node(4); 
tree.root.left.right = new Node(5); 
tree.root.right.right = new Node(8); 
tree.root.right.right.left = new Node(6); 
tree.root.right.right.right = new Node(7); 


// console.log("pre order");
// tree.preOrder(tree.getRootNode());

tree.maxWidth(tree.getRootNode());