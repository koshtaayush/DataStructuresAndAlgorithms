
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


    //          15 
    //         /  \ 
    //        10   25 
    //       / \   / \ 
    //      7  13 22  27 
    //     / \    / 
    //    5   9  17  

    levelOrder(root) {
        var res = [];
        if (root == null) {
            return res;
        }

        var q = [];
        var i = 0;

        q.push(this.root);
        q.push(null);

        var curr = [];
        while (q.length > 0 ) {
            var temp = q.shift(q[0]);
            if (temp != null) {
                curr.push(temp.data);
                if(temp.left != null){
                    q.push(temp.left);
                }

                if(temp.right != null){
                    q.push(temp.right);
                }
                
            } else {
                curr.forEach(t => {
                    res.push(t);
                });
                curr.length = 0;
                if(q.length != 0){
                    q.push(null);
                }
            }
        }

        res.forEach(v => {
            console.log(v);
        })

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

console.log("level order traversal");
// 15 10 25 7 13 22 27 5 9 17
var root = BST.getRootNode();
BST.levelOrder(root); 
